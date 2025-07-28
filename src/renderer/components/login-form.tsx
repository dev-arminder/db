import  React, {ChangeEvent} from "react"
import { Flag, GalleryVerticalEnd, EyeOff, Eye, CircleAlert } from "lucide-react"

import { cn, masterPasswordSchema } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const [masterPassword, setMasterPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const parsedPasswordResults = masterPasswordSchema.safeParse(masterPassword)
  const isSucceed = parsedPasswordResults.success;
  let errorMessage = null;
  if(!isSucceed && parsedPasswordResults.error.issues.length && masterPassword.length > 0){
    errorMessage = parsedPasswordResults.error.issues[0].message
  }

  const handleShowButton = () => {
    let currentState = showPassword;
    setShowPassword(!currentState);
  }; 

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedMasterPassword = e.target.value; 
    setMasterPassword(updatedMasterPassword)
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a href="#" className="flex flex-col items-center gap-2 font-medium">
              <div className="flex h-8 w-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Acme Inc.</span>
            </a>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="master-password">Master Password</Label>
              <div className="relative">
                <Input
                  id="master-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your master password"
                  className={`pr-10 
                    ${errorMessage && `focus-visible:border-(--destructive) focus-visible:ring-(--destructive-light)`}
                    ${isSucceed && `focus-visible:border-(--constructive) focus-visible:ring-(--constructive-light)`}`
                  }
                  onChange={(e) => handleClick(e)}
                  value={masterPassword}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={handleShowButton}
                  aria-label="Show password"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <p className="text-xs text-destructive-foreground flex items-center">
                { errorMessage && ( <><span className="pr-1"> <CircleAlert size={18}/> </span>  <span>{errorMessage}</span></>  ) }
              </p>

              <p className="text-xs text-muted-foreground">
                This password will be used to access the desktop application and can be changed later.
              </p>
            </div>
            <Button type="submit" className='w-full' disabled={!isSucceed}>
              Set Up Master Password
            </Button>
          </div>
        </div>
      </form>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
