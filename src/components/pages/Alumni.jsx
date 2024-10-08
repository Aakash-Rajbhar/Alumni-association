import { Card, CardContent, CardHeader } from "../ui/card"
import Header from "../common/Header"
import { Link } from 'react-router-dom'
import user1_image from "../../assets/images/user1-img.avif";
import user2_image from "../../assets/images/user2-img.avif";
import user3_image from "../../assets/images/user3-img.avif";


const Alumni = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header/>
      <main className="flex-1">

        <section className="w-full py-12 flex justify-center md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="lg:gap-12  xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center items-center text-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Alumni Directory</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Browse and connect with fellow alumni.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#FF9933] px-8 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    Search Alumni
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    Connect with Alumni
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 flex justify-center lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Alumni Spotlight</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn about the amazing accomplishments of our alumni.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center justify-center h-20 bg-muted rounded-t-lg">
                    <img
                      src={user1_image}
                      alt="Alumni Profile"
                      width={80}
                      height={80}
                      className="rounded-full"
                      style={{ aspectRatio: "80/80", objectFit: "cover" }}
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Jane Doe</h3>
                  <p className="text-muted-foreground">Class of 2010, CEO of Acme Inc.</p>
                  <p className="text-muted-foreground">
                    Jane is a successful entrepreneur who founded Acme Inc., a leading technology company. She is a
                    passionate advocate for women in tech and mentors young entrepreneurs.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    View Profile
                  </Link>
                </CardContent>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center justify-center h-20 bg-muted rounded-t-lg">
                    <img
                      src={user2_image}
                      alt="Alumni Profile"
                      width={80}
                      height={80}
                      className="rounded-full"
                      style={{ aspectRatio: "80/80", objectFit: "cover" }}
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Michael Johnson</h3>
                  <p className="text-muted-foreground">Class of 2012, Researcher at Acme Labs</p>
                  <p className="text-muted-foreground">
                    Michael is a brilliant researcher who has made significant contributions to the field of renewable
                    energy. He is passionate about finding sustainable solutions to combat climate change.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    View Profile
                  </Link>
                </CardContent>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center justify-center h-20 bg-muted rounded-t-lg">
                    <img
                      src={user3_image}
                      alt="Alumni Profile"
                      width={80}
                      height={80}
                      className="rounded-full"
                      style={{ aspectRatio: "80/80", objectFit: "cover" }}
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Sarah Lee</h3>
                  <p className="text-muted-foreground">Class of 2015, Social Entrepreneur</p>
                  <p className="text-muted-foreground">
                    Sarah is a passionate social entrepreneur who founded a non-profit organization that provides
                    educational opportunities for underprivileged children. She is committed to making a positive impact
                    in her community.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF9933] px-4 py-2 text-sm font-medium text-[#FFFFFF] shadow transition-colors hover:bg-[#FF9933]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    View Profile
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>

    </div>
  )
}

export default Alumni