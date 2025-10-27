import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/AppSidebar";
import Providerdashboard from "./Providerdashboard";




export default  function Layout({ children}:{children: React.ReactNode}) {
  
  return (
   
      
          <SidebarProvider >
            <AppSidebar />
            <div className="w-full">
              <Providerdashboard>{children}</Providerdashboard>
            </div>
          </SidebarProvider>
       
     
  );
}
