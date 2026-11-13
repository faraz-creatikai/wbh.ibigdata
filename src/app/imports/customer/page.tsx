'use client'

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  Copy,
  Download,
  FileSpreadsheet,
  Layers,
  ListChecks,
  PlusCircle,
  Table,
  Upload,
  Wallet,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import SingleSelect from "@/app/component/SingleSelect";
import { useRouter } from "next/navigation";
import { getCampaign } from "@/store/masters/campaign/campaign";
import { getTypes, getTypesByCampaign } from "@/store/masters/types/types";
import { handleFieldOptions } from "@/app/utils/handleFieldOptions";
import { customerExcelHeaders, importCustomer } from "@/store/customer";
import { getSubtype, getSubtypeByCampaignAndType } from "@/store/masters/subtype/subtype";
import BackButton from "@/app/component/buttons/BackButton";
import SaveButton from "@/app/component/buttons/SaveButton";
import { handleFieldOptionsObject } from "@/app/utils/handleFieldOptionsObject";
import ObjectSelect from "@/app/component/ObjectSelect";
import { useCustomerImport } from "@/context/CustomerImportContext";

const NO_NAME_VALUE = "N/A";
const NO_CONTACT_VALUE = "1010101010";

const SUPPORTED_FORMATS = [".xlsx", ".xlsm", ".xlsb", ".xls", ".ods", ".csv"];
const UNSUPPORTED_FORMATS = [".txt", ".json", ".pdf", ".xml"];

// What the user types -> what gets saved
const PHONE_EXAMPLES: { typed: string; saved: string; note?: string }[] = [
  { typed: "9876543210", saved: "+91 9876543210", note: "No country code means India" },
  { typed: "98765 43210", saved: "+91 9876543210", note: "Spaces and dashes are fine" },
  { typed: "+971 50 123 4567", saved: "+971 501234567", note: "Other countries start with +code" },
  { typed: "9876543210, 9123456789", saved: "+91 9876543210", note: "Several numbers: first valid one is saved" },
  { typed: NO_CONTACT_VALUE, saved: "+91 1010101010", note: "Saved and flagged as no contact" },
];

// Short, practical tips shown under "Good to know"
const TIPS: { icon: React.ElementType; title: string; text: string }[] = [
  {
    icon: Table,
    title: "Headers in row 1",
    text: "The first row must hold your column headers. Avoid merged cells and blank rows above your data.",
  },
  {
    icon: Layers,
    title: "Only the first sheet",
    text: "Data on any other sheet of the file is ignored.",
  },
  {
    icon: ListChecks,
    title: "You match columns next",
    text: "Headers can be named anything. Columns you leave unmapped are not imported.",
  },
  {
    icon: PlusCircle,
    title: "New values are created",
    text: "Campaigns, cities and locations that don't exist yet are added automatically. Check the spelling.",
  },
  {
    icon: Copy,
    title: "Duplicates are kept",
    text: "A number already in the system, or repeated in your file, is still imported and marked as a duplicate.",
  },
  {
    icon: Wallet,
    title: "Price",
    text: "Use a number or words, like 50 Lakh, 1.2 Crore or 25 Thousand.",
  },
  {
    icon: Calendar,
    title: "Dates",
    text: "Use dd-mm-yyyy, for example 25-12-2026.",
  },
  {
    icon: Clock,
    title: "Wait for the report",
    text: "Large files take a little while. You then see every skipped or failed row with the reason, so you can fix and re-upload them.",
  },
];

export default function CustomerImport() {
  const [importData, setImportData] = useState({
    Campaign: { id: "", name: "" },
    CustomerType: { id: "", name: "" },
    CustomerSubType: { id: "", name: "" },
    file: null as File | null,
  });

  const [fieldOptions, setFieldOptions] = useState<Record<string, any[]>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();
  const { setExcelHeaders, setFile } = useCustomerImport();
  const [showTips, setShowTips] = useState(false);



  const objectFields = [
    { key: "Campaign", fetchFn: getCampaign },
    { key: "CustomerType", staticData: [] },
    { key: "CustomerSubtype", staticData: [] } // dependent

  ];

  // Simple array fields (for normal Select)
  const arrayFields = [
  ];

  useEffect(() => {
    const loadFieldOptions = async () => {
      await handleFieldOptionsObject(objectFields, setFieldOptions);
      // await handleFieldOptions(arrayFields, setFieldOptions);
    };
    loadFieldOptions();
  }, []);

  useEffect(() => {
    if (importData.Campaign.id) {
      fetchCustomerType(importData.Campaign.id);
    } else {
      setFieldOptions((prev) => ({ ...prev, CustomerType: [] }));
    }

    if (importData.Campaign.id && importData.CustomerType.id) {
      fetchCustomerSubType(importData.Campaign.id, importData.CustomerType.id);
    } else {
      setFieldOptions((prev) => ({ ...prev, CustomerSubtype: [] }));
    }
  }, [importData.Campaign.id, importData.CustomerType.id]);

  const fetchCustomerType = async (campaignId: string) => {
    try {
      const res = await getTypesByCampaign(campaignId);
      setFieldOptions((prev) => ({ ...prev, CustomerType: res || [] }));
    } catch (error) {
      console.error("Error fetching types:", error);
      setFieldOptions((prev) => ({ ...prev, CustomerType: [] }));
    }
  };

  const fetchCustomerSubType = async (campaignId: string, customertypeId: string) => {
    try {
      const res = await getSubtypeByCampaignAndType(campaignId, customertypeId);
      setFieldOptions((prev) => ({ ...prev, CustomerSubtype: res || [] }));
    } catch (error) {
      console.error("Error fetching types:", error);
      setFieldOptions((prev) => ({ ...prev, CustomerSubtype: [] }));
    }
  };

  // Handle select changes
  const handleSelectChange = useCallback(
    (label: string, value: string) => {
      setImportData((prev) => ({ ...prev, [label]: value }));
      setErrors((prev) => ({ ...prev, [label]: "" }));
    },
    []
  );

  // Handle input change
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setImportData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    },
    []
  );

  // 🔹 Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImportData((prev) => ({ ...prev, file: file }));
    setErrors((prev) => ({ ...prev, file: "" }));
    setFile(file);
  };

  // Validate fields
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!importData.file) newErrors.file = "Please choose an Excel file";
    return newErrors;
  };

  // Handle submit
  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const formData = new FormData();
      /* formData.append("Campaign", importData.Campaign?.name);
      formData.append("CustomerType", importData.CustomerType?.name);
      formData.append("CustomerSubType", importData.CustomerSubType?.name); */
      if (importData.file) formData.append("file", importData.file);

      console.log(importData)
      // customer import api call
      /*  const result = await importCustomer(formData); // mock success */
      /* customer header select api call  */
      const result = await customerExcelHeaders(formData);

      if (result?.headers) {
        console.log(" result ", result)
        // toast.success(`${result.importedCount} customers imported successfully. ${result.skippedCount} duplicates skipped.`);
        setExcelHeaders(result.headers);
        router.push("/imports/customer/select-imports/");
      } else {
        toast.error("Failed to import data");
      }
    } catch (error) {
      console.error("Import Error:", error);
      toast.error("Error importing customers");
    }
  };

  // download demo file function
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/customer-import-file.xlsx";
    link.download = "customer-import-template.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="mx-auto w-full max-w-7xl ">
        <Toaster position="top-right" />



        <div className="w-full rounded-3xl bg-white/90 p-6 shadow-2xl backdrop-blur-lg max-md:p-5">
          {/* Header: title + where you are in the flow */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-4">
            <h1 className="text-2xl font-extrabold text-[var(--color-secondary-darker)]">
              Import <span className="text-[var(--color-primary)]">Customers</span>
            </h1>
            <Steps />

            <div className="relative flex items-center justify-end">
              <button
                type="button"
                onClick={() => setShowTips((prev) => !prev)}
                aria-expanded={showTips}
                className="flex items-center gap-2 cursor-pointer rounded-lg border border-purple-200 bg-purple-50 px-3 py-2 text-sm font-medium text-purple-700 transition hover:bg-purple-100"
              >
                <ListChecks size={16} />
                Good to know
                <ChevronRight
                  size={15}
                  className={`transition-transform duration-200 ${showTips ? "rotate-90" : ""
                    }`}
                />
              </button>

              {showTips && (
                <div className="absolute right-0 top-full z-[100] mt-2 w-[650px] max-w-[calc(100vw-32px)] rounded-xl border border-gray-200 bg-white p-4 shadow-2xl">

                  {/* Header */}
                  <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
                    <div>
                      <h3 className="text-base font-bold text-gray-900">
                        Good to know
                      </h3>
                      <p className="mt-0.5 text-xs text-gray-500">
                        Helpful tips for importing your customers
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowTips(false)}
                      className="rounded-md px-2 py-1 text-sm font-medium text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
                    >
                      Close
                    </button>
                  </div>

                  {/* Tips */}
                  <ul className="grid grid-cols-2 gap-x-5 gap-y-4">
                    {TIPS.map(({ icon: Icon, title, text }) => (
                      <li key={title} className="flex gap-2.5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                          <Icon size={16} />
                        </span>

                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {title}
                          </p>

                          <p className="mt-0.5 text-xs leading-relaxed text-gray-600">
                            {text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <BackButton
              url="/customer"
              text="Back"
              icon={<ArrowLeft size={18} />}
            />



          </div>

          {/* Required columns */}
          <section>
            <div className="mb-3 flex flex-wrap items-baseline gap-x-3">
              <h2 className="text-base font-bold text-gray-900">Required columns</h2>
              <p className="text-sm text-gray-600">Every row in your file needs these three.</p>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              <RequiredCard
                name="Campaign"
                note="The campaign this lead belongs to. A new campaign is created automatically."
              />
              <RequiredCard
                name="Customer name"
                note="The lead's name."
                fallbackLabel="No name available? Type"
                fallbackValue={NO_NAME_VALUE}
              />
              <RequiredCard
                name="Contact number"
                note="A valid phone number."
                fallbackLabel="No number available? Type"
                fallbackValue={NO_CONTACT_VALUE}
                fallbackHint="The lead is still imported and flagged in the report."
              />
            </div>
          </section>

          {/* Upload + phone examples */}
          <div className="mt-6 grid gap-6 lg:grid-cols-5">
            <section className="flex flex-col lg:col-span-2">
              <h2 className="mb-3 text-base font-bold text-gray-900">Your file</h2>
              <FileUpload
                fileName={importData.file?.name}
                onChange={handleFileChange}
                error={errors.file}
              />

              {/* Supported file types */}
              <div className="mt-3 space-y-1.5 text-sm text-gray-600">
                <p className="flex flex-wrap items-center gap-1.5">
                  <span className="font-medium text-gray-800">Supported:</span>
                  {SUPPORTED_FORMATS.map((f) => (
                    <FormatChip key={f} tone="ok">{f}</FormatChip>
                  ))}
                </p>
                <p className="flex flex-wrap items-center gap-1.5">
                  <span className="font-medium text-gray-800">Not supported:</span>
                  {UNSUPPORTED_FORMATS.map((f) => (
                    <FormatChip key={f} tone="no">{f}</FormatChip>
                  ))}
                </p>
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
                >
                  <Download size={15} /> Download sample file
                </button>
                <SaveButton text="Import" onClick={handleSubmit} />
              </div>
            </section>

            <section className="lg:col-span-3">
              <h2 className="mb-3 text-base font-bold text-gray-900">How phone numbers are read</h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full min-w-[480px] text-left text-sm">
                  <thead className="bg-gray-50 text-gray-600">
                    <tr>
                      <th className="px-3 py-2 font-medium">You type</th>
                      <th className="px-3 py-2 font-medium">We save</th>
                      <th className="px-3 py-2 font-medium">Why</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {PHONE_EXAMPLES.map((ex) => (
                      <tr key={ex.typed}>
                        <td className="px-3 py-2 font-mono text-[13px] text-gray-900">{ex.typed}</td>
                        <td className="px-3 py-2 font-mono text-[13px] text-gray-900">{ex.saved}</td>
                        <td className="px-3 py-2 text-gray-600">{ex.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Set the contact column to <span className="font-semibold text-gray-800">Text</span> format in Excel.
                Otherwise long numbers turn into <code className="rounded bg-gray-100 px-1 font-mono text-[12px]">9.19E+11</code> and lose digits.
              </p>
            </section>
          </div>

          {/* More tips */}

        </div>
      </div>
    </>
  );
}

// ---------------------------------------------------------------
// Pieces
// ---------------------------------------------------------------

// Upload -> match columns -> review report
const Steps = () => {
  const steps = ["Upload file", "Match columns", "Review report"];
  return (
    <ol className="flex items-center gap-2 text-sm">
      {steps.map((label, i) => (
        <li key={label} className="flex items-center gap-2">
          <span
            className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${i === 0 ? "bg-[var(--color-primary)] text-white" : "bg-gray-100 text-gray-500"
              }`}
          >
            {i + 1}
          </span>
          <span className={i === 0 ? "font-semibold text-gray-900" : "text-gray-500 max-sm:hidden"}>{label}</span>
          {i < steps.length - 1 && <ChevronRight size={14} className="text-gray-300" />}
        </li>
      ))}
    </ol>
  );
};

const FormatChip = ({ tone, children }: { tone: "ok" | "no"; children: React.ReactNode }) => (
  <code
    className={`rounded-md px-1.5 py-0.5 font-mono text-[12px] ring-1 ring-inset ${tone === "ok"
      ? "bg-emerald-50 text-emerald-800 ring-emerald-200"
      : "bg-gray-100 text-gray-500 line-through ring-gray-200"
      }`}
  >
    {children}
  </code>
);

const RequiredCard = ({
  name,
  note,
  fallbackLabel,
  fallbackValue,
  fallbackHint,
}: {
  name: string;
  note: string;
  fallbackLabel?: string;
  fallbackValue?: string;
  fallbackHint?: string;
}) => (
  <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-4">
    <div className="flex items-center justify-between gap-2">
      <h3 className="font-semibold text-gray-900">{name}</h3>
      <span className="rounded-full bg-rose-50 px-2 py-0.5 text-[11px] font-semibold text-rose-700 ring-1 ring-inset ring-rose-200">
        Required
      </span>
    </div>
    <p className="mt-1 text-sm text-gray-600">{note}</p>
    {fallbackValue && (
      <div className="mt-3 border-t border-dashed border-gray-200 pt-3 text-sm text-gray-700">
        <div className="flex flex-wrap items-center gap-2 cursor-pointer">
          <span>{fallbackLabel}</span>
          <CopyChip value={fallbackValue} />
        </div>
        {fallbackHint && <p className="mt-1.5 text-gray-600">{fallbackHint}</p>}
      </div>
    )}
  </div>
);

// click the value to copy it
const CopyChip = ({ value }: { value: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success(`Copied ${value}`);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error("Could not copy. Please type it manually.");
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${value}`}
      className="inline-flex cursor-pointer cursor-pointer items-center gap-1.5 rounded-md bg-amber-50 px-2 py-0.5 font-mono text-[13px] font-semibold text-amber-800 ring-1 ring-inset ring-amber-200 hover:bg-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
    >
      {value}
      {copied ? <Check size={13} /> : <Copy size={13} />}
    </button>
  );
};

const FileUpload = ({
  fileName,
  onChange,
  error,
}: {
  fileName?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) => (
  <div className="flex flex-1 flex-col">
    <label
      className={`flex min-h-[170px] flex-1 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-6 text-center transition-colors focus-within:ring-2 focus-within:ring-blue-500 ${error
        ? "border-red-400 bg-red-50/40"
        : fileName
          ? "border-emerald-300 bg-emerald-50/40"
          : "border-gray-300 bg-gray-50/60 hover:border-[var(--color-primary)]"
        }`}
    >
      <input type="file" accept=".xlsx, .xlsm, .xlsb, .xls, .ods, .csv" onChange={onChange} className="sr-only" />
      <FileSpreadsheet size={30} className={fileName ? "text-emerald-600" : "text-gray-400"} />
      {fileName ? (
        <>
          <span className="max-w-full break-all text-sm font-semibold text-gray-900">{fileName}</span>
          <span className="text-sm text-gray-600">Click to choose a different file</span>
        </>
      ) : (
        <>
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white">
            <Upload size={15} /> Choose file
          </span>
          <span className="text-sm text-gray-600">Excel or CSV file</span>
        </>
      )}
    </label>
    {error && <span className="mt-1.5 text-sm text-red-500">{error}</span>}
  </div>
);