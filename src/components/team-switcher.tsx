"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { CaretSortIcon, PlusIcon } from "@radix-ui/react-icons";
import { ChevronRight, ExternalLink, GalleryVerticalEnd, HelpCircle, MessageSquare } from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";

interface NotificationItem {
  title: string
  description: string
  href: string
}

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  const notifications: NotificationItem[] = [
    {
      title: "O que é a Evil Corp.?",
      description: "Learn how our platform works and what makes it different",
      href: "/docs/introduction",
    },
    {
      title: "Getting Started Guide",
      description: "Learn how to create your first project and start building",
      href: "/docs/getting-started",
    },
    {
      title: "Custom Domain Setup",
      description: "Learn how to add a custom domain to your workspace for free",
      href: "/docs/domains",
    },
    {
      title: "Using Tags",
      description: "Learn more about tags and how to better manage your content",
      href: "/docs/tags",
    },
    {
      title: "Analytics Overview",
      description: "Understand your data better with our analytics features",
      href: "/docs/analytics",
    },
  ]

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <GalleryVerticalEnd className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Evil Corp.</span>
                <span className="truncate text-xs">startup</span>
              </div>
              <HelpCircle className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" side="right" className="w-[380px]">
        <div className="flex flex-col space-y-4 p-4">
          <h2 className="text-xl font-semibold tracking-tight">Precisa de ajuda?</h2>
          <p className="text-sm text-muted-foreground">Explore nossa documentação ou mande mensagem se precisar de ajuda.</p>
        </div>
        <DropdownMenuSeparator />
        <div className="max-h-[300px] overflow-y-auto p-2">
          {notifications.map((item, index) => (
            <DropdownMenuItem key={index} asChild>
              <Link href={item.href} className="flex items-start space-x-2 rounded-md p-2 hover:bg-muted cursor-pointer">
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            </DropdownMenuItem>
          ))}
        </div>
        <DropdownMenuSeparator />
        <div className="p-2">
          <DropdownMenuItem asChild>
            <Link href="/support" className="flex w-full items-center justify-between rounded-md p-2 hover:bg-muted cursor-pointer">
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4" />
                <span className="text-sm font-medium">Contact Support</span>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </Link>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
