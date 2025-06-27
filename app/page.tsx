'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
export default function Home() {
  const { toast } = useToast()
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Welcome to the Home Page</h1>
          <div className="flex flex-col space-y-4">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
              Yellow Button 1
            </Button>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
              Yellow Button 2
            </Button>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
              Yellow Button 3
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
