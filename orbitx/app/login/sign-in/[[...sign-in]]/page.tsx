import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn path="/login/sign-in" routing="path" signUpUrl="/login/sign-up" />
    </div>
  )
}