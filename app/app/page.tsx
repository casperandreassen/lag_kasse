import DeployButton from '../components/DeployButton'
import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import ConnectSupabaseSteps from '@/components/ConnectSupabaseSteps'
import SignUpUserSteps from '@/components/SignUpUserSteps'
import Header from '@/components/Header'
import { cookies } from 'next/headers'

export default async function Index() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore);
    const user = (await supabase.auth.getUser()).data.user?.email


  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <p>{user}</p>
    </div>
  )
}
