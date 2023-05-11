//components
import Info from "@/components/account/info/Info"
// layout
import { BasicLayout } from "@/layouts"

const AccountPage = () => {
  return (
    <>
      <BasicLayout isContainer relative>
        <Info/>
      </BasicLayout>
    </>
  )
}

export default AccountPage