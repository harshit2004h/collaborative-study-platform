import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="flex flex-col p-6 gap-6">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-5 w-96" />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <Skeleton className="h-10 w-64" />
        <div className="flex gap-2 w-full sm:w-auto">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-2">
        <Skeleton className="h-10 w-[180px]" />
        <Skeleton className="h-10 w-[180px]" />
      </div>

      <Skeleton className="h-10 w-full mb-4" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <Skeleton className="h-6 w-20" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Skeleton className="h-9 w-28" />
              <Skeleton className="h-9 w-28" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

