"use client";

import * as React from "react";
import {
  Home, User, ShoppingCart, Info, Pointer,
  IndianRupee, Diamond, MessageSquare, PlusSquare,
  PenSquareIcon, User2, LucideCoins, ShieldUser, Settings,
} from "lucide-react";

import { NavMain } from "../components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { useAuth } from "@/context/AuthContext";

const data = {
  navMain: [
    { title: "Dashboard",               url: "/dashboard",                icon: Home          },
    { title: "Customers",               url: "/customer",                 icon: User          },
    { title: "Customer Follow Up",      url: "/followups/customer",       icon: PlusSquare    },
    { title: "Contact",                 url: "/contact",                  icon: User          },
    { title: "Contact Follow Up",       url: "/followups/contact",        icon: PlusSquare    },
    { title: "Company Project",         url: "/company_project",          icon: User          },
    { title: "Company Project Enquiry", url: "/company_project/enquiry",  icon: Info          },
    { title: "Schedules",               url: "/schedules",                icon: PenSquareIcon },
    { title: "Task",                    url: "/task",                     icon: Pointer       },
    {
      title: "Masters", url: "#", icon: Diamond,
      items: [
        { title: "Customer Fields",     url: "/masters/customerfields"    },
        { title: "Campaign",            url: "/masters/campaign"          },
        { title: "Types",               url: "/masters/customer-types"    },
        { title: "Customer Subtype",    url: "/masters/customer-subtype"  },
        { title: "City",                url: "/masters/city"              },
        { title: "Locations",           url: "/masters/locations"         },
        { title: "Sub Locations",       url: "/masters/sublocation"       },
        { title: "Facilities",          url: "/masters/facilities"        },
        { title: "Amenities",           url: "/masters/amenities"         },
        { title: "Builder Sliders",     url: "/masters/builder-sliders"   },
        { title: "Fuctional Areas",     url: "/masters/functional-areas"  },
        { title: "Industries",          url: "/masters/industries"        },
        { title: "Contact Campaign",    url: "/masters/contact-campaign"  },
        { title: "Contact Type",        url: "/masters/contact-type"      },
        { title: "References",          url: "/masters/references"        },
        { title: "Price",               url: "/masters/price"             },
        { title: "Expenses",            url: "/masters/expenses"          },
        { title: "Incomes",             url: "/masters/incomes"           },
        { title: "Status Type",         url: "/masters/status-type"       },
        { title: "Contact Status Type", url: "/masters/contact-statustype"},
        { title: "Payment Methods",     url: "/masters/payment-methods"   },
        { title: "Mail Templates",      url: "/masters/mail-templates"    },
        { title: "Whatsapp Templates",  url: "/masters/whatsapp-templates"},
        { title: "New User Requests",   url: "/masters/newuser-requests"  },
      ],
    },
    {
      title: "Financial", url: "#", icon: IndianRupee,
      items: [
        { title: "Income Marketings",  url: "/financial/income_marketings"  },
        { title: "Expense Marketings", url: "/financial/expense_marketings" },
      ],
    },
    { title: "Requirements",     url: "/requirements",      icon: Home          },
    { title: "Favourites",       url: "/favourites",        icon: Home          },
    {
      title: "E-commerce", url: "#", icon: ShoppingCart,
      items: [
        { title: "Dashboard",    url: "/dashboard"    },
        { title: "Category",     url: "/category"     },
        { title: "Sub Category", url: "/sub-category" },
        { title: "Products",     url: "/product"      },
        { title: "Orders",       url: "/orders"       },
      ],
    },
    {
      title: "Settings", url: "#", icon: Settings,
      items: [
        { title: "Customer Fields", url: "/settings/customer/customer-fields" },
      ],
    },
    { title: "Users",            url: "/users",            icon: User2         },
    { title: "Customer Import",  url: "/imports/customer", icon: MessageSquare },
    { title: "Contact Import",   url: "/imports/contact",  icon: MessageSquare },
    { title: "Database Manager", url: "/database_manager", icon: LucideCoins   },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  const { admin, isLoading } = useAuth();
  if (isLoading) return null;

  const isCollapsed = state === "collapsed";
  const isAdmin = admin?.role === "administrator";

  const filteredNavItems = data.navMain
    .filter((item) => !(item.title === "Masters" && !isAdmin))
    .map((item) =>
      item.title === "Settings"
        ? {
            ...item,
            items: item.items?.filter(
              (s) => !(s.title === "Customer Fields" && !isAdmin)
            ),
          }
        : item
    );

  return (
    <Sidebar
      collapsible="icon"
      className={[
        /* ── light mode ── */
        "bg-white border-r border-gray-100",
        /* ── dark mode ── */
        "dark:bg-gray-950 dark:border-white/[0.06]",
      ].join(" ")}
      {...props}
    >
      {/* ── HEADER ── */}
      <SidebarHeader
        className={[
          "flex items-center justify-center",
          "border-b border-gray-100 dark:border-white/[0.06]",
          "bg-white dark:bg-gray-950",
          isCollapsed ? "py-4 px-2" : "py-3 px-4",
        ].join(" ")}
      >
        {isCollapsed ? (
          /* Collapsed: icon-only mark */
          <div
            className="size-9 rounded-xl flex items-center justify-center bg-[var(--color-primary)]/10 dark:bg-[var(--color-primary)]/20"
          >
            <ShieldUser
              size={17}
              strokeWidth={2}
              className="text-[var(--color-primary)]"
            />
          </div>
        ) : (
          /* Expanded: icon mark + logo */
          <div className="flex items-center gap-3 w-full">
            <div
              className="size-8 rounded-xl shrink-0 flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-primary), var(--color-secondary, var(--color-primary)))",
                boxShadow:
                  "0 3px 14px -4px color-mix(in srgb, var(--color-primary) 55%, transparent)",
              }}
            >
              <ShieldUser size={15} strokeWidth={2.2} color="white" />
            </div>
            <img
              src="/logo.webp"
              alt="App Logo"
              className="h-8 w-auto object-contain"
            />
          </div>
        )}
      </SidebarHeader>

      {/* ── NAV CONTENT ── */}
      <SidebarContent
        className={[
          "py-2",
          "bg-white dark:bg-gray-950",
          /* slim scrollbar */
          "[&::-webkit-scrollbar]:w-[3px]",
          "[&::-webkit-scrollbar-track]:bg-transparent",
          "[&::-webkit-scrollbar-thumb]:rounded-full",
          "[&::-webkit-scrollbar-thumb]:bg-gray-200",
          "dark:[&::-webkit-scrollbar-thumb]:bg-white/10",
        ].join(" ")}
      >
        <NavMain items={filteredNavItems} />
      </SidebarContent>

      {/* ── FOOTER ── */}
      {!isCollapsed && (
        <SidebarFooter
          className={[
            "border-t border-gray-100 dark:border-white/[0.06]",
            "bg-white dark:bg-gray-950",
            "p-3",
          ].join(" ")}
        >
          <div className="flex items-center gap-2.5 px-1">
            {/* Avatar circle */}
            <div className="size-7 rounded-lg shrink-0 flex items-center justify-center bg-gray-100 dark:bg-white/[0.07]">
              <User2 size={13} strokeWidth={2} className="text-gray-400 dark:text-white/40" />
            </div>

            <div className="flex flex-col min-w-0">
              <span className="text-[11.5px] font-semibold text-gray-600 dark:text-white/55 truncate">
                {admin?.name ?? "User"}
              </span>
              <span
                className="text-[10px] font-bold uppercase tracking-[0.1em] truncate text-[var(--color-primary)]"
              >
                {isAdmin ? "Administrator" : "Member"}
              </span>
            </div>

            {/* Online pulse */}
            <span className="ml-auto relative size-2 shrink-0">
              <span
                className="absolute inset-0 rounded-full animate-ping opacity-50 bg-[var(--color-primary)]"
              />
              <span className="absolute inset-0 rounded-full bg-[var(--color-primary)]" />
            </span>
          </div>
        </SidebarFooter>
      )}

      <SidebarRail />
    </Sidebar>
  );
}