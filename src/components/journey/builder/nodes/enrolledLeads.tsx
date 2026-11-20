import { UserCheck } from "lucide-react";
import type { NodeProps } from "@xyflow/react";
import type { JourneyFlowNode } from "@/types/journey-builder";
import WorkflowNodeCard from "./WorkflowNodeCard";

export default function EnrolledLeadsNode({
  data,
  selected,
}: NodeProps<JourneyFlowNode>) {
  return (
    <WorkflowNodeCard
      data={data}
      icon={UserCheck}
      tone="indigo"
      selected={selected}
      showTarget={false}
    />
  );
}