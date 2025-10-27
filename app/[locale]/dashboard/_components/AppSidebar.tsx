"use client"
import {LayoutDashboard,TableColumnsSplit,UserCircle2Icon,BrickWallIcon} from "lucide-react"
 
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {useLocale, useTranslations} from 'next-intl';
import Switcherlanguage from "./Switcherlanguage"
type menueProps={
   title:string;
    url: string;
    icon: React.ElementType;
}[]
export function AppSidebar() {
    const Path=usePathname()
    const t = useTranslations();
    const local=useLocale();
    // Menu items.
const items:menueProps = [
  {
    title: t('dashboard.title'),
    url: `/${local}/dashboard`,
    icon: LayoutDashboard,
  },
  {
    title: t('tables.title'),
    url: `/${local}/dashboard/tables`,
    icon:TableColumnsSplit,
  },
 
  {
    title: t('billing.title'),
    url: `/${local}/dashboard/billing`,
    icon: BrickWallIcon,
  },
  
  {
    title: t('Profile.title'),
    url: `/${local}/dashboard/profile`,
    icon:UserCircle2Icon,
  },
]
  return (
    <Sidebar className="py-5 px-3" >
      <SidebarHeader  className="flex justify-center items-center">
      <Image src={"/Sales_Dashboard/assets/dashboard-icon.png"} width={100} height={200} alt="chat"/>
      </SidebarHeader>
      <SidebarContent >
      <SidebarGroup className="text-center">
       
       
      
      </SidebarGroup>
        <SidebarGroup />
        
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item,index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className={`flex gap-3 rounded-2xl ${Path==item.url&&"bg-[#0089e494]"}`}
                    key={index}>
                      <item.icon className="text-[#0089e4]"/>
                      <span className="font-semibold">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <Switcherlanguage/>
            </SidebarMenu>
          </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}