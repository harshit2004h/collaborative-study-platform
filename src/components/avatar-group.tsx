import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface AvatarGroupProps {
  avatars: string[]
  count: number
}

export function AvatarGroup({ avatars, count }: AvatarGroupProps) {
  return (
    <div className="flex -space-x-2">
      {avatars.map((avatar, i) => (
        <Avatar key={i} className="border-2 border-background">
          <AvatarImage src={avatar} alt="Avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      ))}
      {count > avatars.length && (
        <Avatar className="border-2 border-background">
          <AvatarFallback>+{count - avatars.length}</AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}

