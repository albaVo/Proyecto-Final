import { LayoutProvider } from "@/context"
import AdminLayout from "@/layouts/AdminLayout/AdminLayout"
import { ScheduleComponent } from "@syncfusion/ej2-react-schedule"

const CalendarioPage = () => {
  return (
    <LayoutProvider>
        <AdminLayout>

        </AdminLayout>
    </LayoutProvider>
  )
}

export default CalendarioPage