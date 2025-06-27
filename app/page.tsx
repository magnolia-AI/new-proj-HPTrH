'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"

export default function Home() {
  const { toast } = useToast()
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-beige text-brand-black">
      <div className="container text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Espresso Martini</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Discover the perfect blend of espresso and martini in our signature cocktail. Smooth, rich, and always satisfying.</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="w-full sm:w-auto" onClick={() => toast({ title: "Button 1 Clicked!" })}>Order Now</Button>
          <Button variant="outline" className="w-full sm:w-auto" onClick={() => toast({ title: "Button 2 Clicked!" })}>Learn More</Button>
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Signature Cocktail</h2>
            <p className="mb-4">Experience the perfect balance of espresso and vodka, with a touch of coffee liqueur and simple syrup.</p>
            <Button variant="yellow" className="w-full">Try It Now</Button>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Crafted with Love</h2>
            <p className="mb-4">Each cocktail is made with the finest ingredients and care to ensure the best taste.</p>
            <Button variant="yellow" className="w-full">Learn More</Button>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Perfect for Any Occasion</h2>
            <p className="mb-4">Whether it's a night out or a quiet evening at home, our espresso martini is the perfect choice.</p>
            <Button variant="yellow" className="w-full">Order Now</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
