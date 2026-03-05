'use client'

import { ChevronRight, type LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,           // ← added
} from "@/components/ui/sidebar"

const ICON_ACCENTS = [
  "text-indigo-400  bg-indigo-500/10  dark:bg-indigo-500/15",
  "text-teal-400    bg-teal-500/10    dark:bg-teal-500/15",
  "text-amber-400   bg-amber-500/10   dark:bg-amber-500/15",
  "text-pink-400    bg-pink-500/10    dark:bg-pink-500/15",
  "text-sky-400     bg-sky-500/10     dark:bg-sky-500/15",
  "text-violet-400  bg-violet-500/10  dark:bg-violet-500/15",
  "text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/15",
  "text-rose-400    bg-rose-500/10    dark:bg-rose-500/15",
]

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: { title: string; url: string }[]
  }[]
}) {
  const pathname = usePathname()
  const { state } = useSidebar()           // ← added
  const isCollapsed = state === "collapsed" // ← added

  return (
    <SidebarGroup className="px-2 py-2">
      <SidebarMenu className="gap-[2px]">
        {items.map((item, idx) => {
          const isActive = pathname === item.url
          const accentClass = ICON_ACCENTS[idx % ICON_ACCENTS.length]

          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <Link href={item.url}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      className={[
                        "relative cursor-pointer rounded-xl h-auto min-h-[40px]",
                        "text-[13px] font-medium tracking-[0.005em]",
                        "transition-all duration-150",
                        // ── THE FIX: no padding + centered icon when collapsed ──
                        isCollapsed ? "px-0 justify-center" : "px-2.5",
                        isActive
                          ? [
                              "bg-[var(--color-primary)] text-white",
                              "hover:bg-[var(--color-primary)] hover:text-white",
                              "shadow-[0_3px_16px_-4px_var(--color-primary)]",
                            ].join(" ")
                          : [
                              "text-gray-600 hover:text-gray-900",
                              "hover:bg-gray-100",
                              "dark:text-white/55 dark:hover:text-white/90",
                              "dark:hover:bg-white/[0.07]",
                            ].join(" "),
                      ].join(" ")}
                    >
                      {item.icon && (
                        <span
  className={[
    "flex items-center justify-center size-[26px] shrink-0 rounded-lg",
    !isCollapsed && "ml-2",
    "transition-all duration-150",
    isActive ? "bg-white/20 text-white" : accentClass,
  ].filter(Boolean).join(" ")}
>
                          <item.icon size={14} strokeWidth={2.2} />
                        </span>
                      )}

                     {!isCollapsed && (
  <span className="truncate">{item.title}</span>
)}

                      {item.items && !isCollapsed && (
  <ChevronRight
    size={13}
    strokeWidth={2.5}
    className={[
      "ml-auto shrink-0 transition-transform duration-200",
      "group-data-[state=open]/collapsible:rotate-90",
      isActive ? "text-white/60" : "text-gray-300 dark:text-white/20",
    ].join(" ")}
  />
)}
                    </SidebarMenuButton>
                  </Link>
                </CollapsibleTrigger>

                {item.items && (
                  <CollapsibleContent>
                    <SidebarMenuSub
                      className={[
                        "ml-[15px] pl-3 mt-0.5 mb-1",
                        "border-l-2 border-gray-100 dark:border-white/[0.07]",
                        "gap-[1px]",
                      ].join(" ")}
                    >
                      {item.items.map((subItem) => {
                        const isSubActive = pathname === subItem.url
                        return (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              asChild
                              className={[
                                "rounded-lg px-3 py-[6px]",
                                "text-[12px] font-medium tracking-[0.01em]",
                                "h-auto transition-all duration-150",
                                "flex items-center gap-2",
                                isSubActive
                                  ? [
                                      "text-[var(--color-primary)] font-semibold",
                                      "bg-[var(--color-primary)]/8",
                                      "dark:bg-[var(--color-primary)]/15",
                                      "dark:text-[var(--color-primary-light,var(--color-primary))]",
                                    ].join(" ")
                                  : [
                                      "text-gray-500 hover:text-gray-800",
                                      "hover:bg-gray-100",
                                      "dark:text-white/40 dark:hover:text-white/75",
                                      "dark:hover:bg-white/[0.05]",
                                    ].join(" "),
                              ].join(" ")}
                            >
                              <Link href={subItem.url}>
                                <span
                                  className={[
                                    "size-[5px] rounded-full shrink-0 transition-all duration-150",
                                    isSubActive
                                      ? "bg-[var(--color-primary)] scale-125"
                                      : "bg-gray-300 dark:bg-white/20",
                                  ].join(" ")}
                                />
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        )
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                )}
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}