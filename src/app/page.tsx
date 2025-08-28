import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { SearchExamples } from "@/components/search-component";
import { SelectExamples } from "@/components/select-examples";
import { HeaderComponent } from "@/components/header-component";
import { FooterComponent } from "@/components/footer-component";
import { InPageNavigation } from "@/components/ui/in-page-navigation";

export default function Home() {
  return (
    <>
      <HeaderComponent />

      <div className="pt-20 font-public-sans grid grid-cols-1 tablet:grid-cols-4 desktop:grid-cols-4 gap-8 items-start">
        <aside className="tablet:col-span-1 tablet:overflow-y-auto tablet:sticky tablet:top-20">
          <InPageNavigation
            ariaLabel="Side navigation"
            items={[
              { label: "Accordion", href: "#accordion", isActive: true },
              { label: "Alerts", href: "#alerts" },
              { label: "Dialog", href: "#dialog" },
              { label: "Buttons", href: "#buttons" },
              { label: "Cards", href: "#cards" },
              { label: "Forms", href: "#forms" },
              { label: "Badges", href: "#badges" },
              { label: "Typography", href: "#typography" },
              { label: "In-page navigation", href: "#in-page-navigation" },
              { label: "Tables", href: "#tables" },
              { label: "Pagination", href: "#pagination" },
              { label: "Checkboxes", href: "#checkboxes" },
              { label: "Radio Groups", href: "#radio-groups" },
              { label: "Search", href: "#search-id" },
              { label: "Select", href: "#select" },
              { label: "Lists", href: "#lists" },
            ]}
          />
        </aside>

        <main className="py-8 px-4 mx-auto max-w-screen-desktop tablet:col-span-3 desktop:col-span-3">
          <div className="mb-12">
            <h1 className="text-5xl font-bold max-w-prose mb-4 font-merriweather">
              USWDS + Tailwind UI Components
            </h1>
            <p className="text-xl mb-6 max-w-prose">
              A collection of shadcn/ui-style components built with the U.S. Web
              Design System (USWDS) design tokens and Tailwind CSS v4.
            </p>
          </div>

          {/* Accordion Examples */}
          <section id="accordion" className="mb-12 scroll-mt-16 tablet:scroll-mt-25 desktop:scroll-mt-25">
            <h2 className="text-3xl font-bold mb-6 font-merriweather">
              Accordion
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Bill of Rights</h3>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-2"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>First Amendment</AccordionTrigger>
                    <AccordionContent>
                      <p className="leading-normal max-w-prose">
                        Congress shall make no law respecting an establishment
                        of religion, or prohibiting the free exercise thereof;
                        or abridging the freedom of speech, or of the press; or
                        the right of the people peaceably to assemble, and to
                        petition the Government for a redress of grievances.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Second Amendment</AccordionTrigger>
                    <AccordionContent>
                      <p className="leading-normal max-w-prose">
                        A well regulated Militia, being necessary to the
                        security of a free State, the right of the people to
                        keep and bear Arms, shall not be infringed.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Third Amendment</AccordionTrigger>
                    <AccordionContent>
                      <p className="leading-normal max-w-prose">
                        No Soldier shall, in time of peace be quartered in any
                        house, without the consent of the Owner, nor in time of
                        war, but in a manner to be prescribed by law.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Fourth Amendment</AccordionTrigger>
                    <AccordionContent>
                      <p className="leading-normal max-w-prose">
                        The right of the people to be secure in their persons,
                        houses, papers, and effects, against unreasonable
                        searches and seizures, shall not be violated, and no
                        Warrants shall issue, but upon probable cause, supported
                        by Oath or affirmation, and particularly describing the
                        place to be searched, and the persons or things to be
                        seized.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Fifth Amendment</AccordionTrigger>
                    <AccordionContent>
                      <p className="leading-normal max-w-prose">
                        No person shall be held to answer for a capital, or
                        otherwise infamous crime, unless on a presentment or
                        indictment of a Grand Jury, except in cases arising in
                        the land or naval forces, or in the Militia, when in
                        actual service in time of War or public danger; nor
                        shall any person be subject for the same offence to be
                        twice put in jeopardy of life or limb; nor shall be
                        compelled in any criminal case to be a witness against
                        himself, nor be deprived of life, liberty, or property,
                        without due process of law; nor shall private property
                        be taken for public use, without just compensation.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">
                  FAQ - Multiple Selection
                </h3>
                <Accordion type="multiple" className="w-full space-y-2">
                  <AccordionItem value="faq-1">
                    <AccordionTrigger>
                      How do I apply for benefits?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="leading-normal max-w-prose">
                        You can apply for benefits online through our secure
                        portal. The application process typically takes 15-20
                        minutes to complete. You'll need to provide personal
                        information, employment history, and supporting
                        documentation.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger>
                      What documents do I need?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="leading-normal max-w-prose">
                        Required documents include a valid government-issued
                        photo ID, Social Security card, proof of income for the
                        last 6 months, and any relevant medical records or
                        disability documentation.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger>
                      How long does processing take?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="leading-normal max-w-prose">
                        Most applications are processed within 30-45 business
                        days. You'll receive email notifications at key
                        milestones, and you can check your application status
                        online at any time using your reference number.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* Alert Examples */}
          <section id="alerts" className="mb-12 scroll-mt-16 tablet:scroll-mt-25 desktop:scroll-mt-25">
            <h2 className="text-3xl font-bold mb-6 font-merriweather">
              Alerts
            </h2>
            <div className="space-y-4">
              <Alert variant="success" showIcon={true}>
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                  Your form has been submitted successfully. We'll get back to
                  you within 24 hours.
                </AlertDescription>
              </Alert>

              <Alert variant="warning" showIcon={true}>
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  Please review your information before submitting. Some fields
                  may need attention.
                </AlertDescription>
              </Alert>

              <Alert variant="danger" showIcon={true}>
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  There was an error processing your request. Please try again
                  later.
                </AlertDescription>
              </Alert>

              <Alert variant="info" showIcon={true}>
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  This is an informational message to help guide you through the
                  process.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* Dialog Examples */}
          <section id="dialog" className="mb-12 scroll-mt-16 tablet:scroll-mt-25 desktop:scroll-mt-25">
            <h2 className="text-3xl font-bold mb-6 font-merriweather">
              Dialog
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Basic Dialog</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-3">
                        <label htmlFor="name" className="text-sm font-bold">
                          Name
                        </label>
                        <Input
                          id="name"
                          defaultValue="Pedro Duarte"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid gap-3">
                        <label htmlFor="username" className="text-sm font-bold">
                          Username
                        </label>
                        <Input
                          id="username"
                          defaultValue="@peduarte"
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <ul className="flex flex-col sm:flex-row gap-2 w-full">
                        <li className="flex">
                          <DialogClose asChild>
                            <Button variant="outline" className="flex-1">
                              Cancel
                            </Button>
                          </DialogClose>
                        </li>
                        <li className="flex">
                          <Button type="submit" className="flex-1">
                            Save changes
                          </Button>
                        </li>
                      </ul>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Confirmation Dialog</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="danger">Delete Account</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Are you sure you want to continue?
                      </DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <ul className="flex flex-col sm:flex-row gap-2 w-full">
                        <li className="flex">
                          <DialogClose asChild>
                            <Button variant="outline" className="flex-1">
                              Cancel
                            </Button>
                          </DialogClose>
                        </li>
                        <li className="flex">
                          <Button variant="danger" className="flex-1">
                            Delete Account
                          </Button>
                        </li>
                      </ul>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Share Link Dialog</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary">Share</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Share link</DialogTitle>
                      <DialogDescription>
                        Anyone who has this link will be able to view this.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                      <div className="grid flex-1 gap-2">
                        <label htmlFor="link" className="sr-only">
                          Link
                        </label>
                        <Input
                          id="link"
                          defaultValue="https://ui.shadcn.com/docs/installation"
                          readOnly
                        />
                      </div>
                      <Button type="submit" size="sm" className="px-3">
                        Copy
                      </Button>
                    </div>
                    <DialogFooter className="sm:justify-start">
                      <DialogClose asChild>
                        <Button type="button" variant="secondary">
                          Close
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">
                  Session Timeout Dialog
                </h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="warning">Simulate Session Warning</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Your session will end soon.</DialogTitle>
                      <DialogDescription>
                        You've been inactive for too long. Please choose to stay
                        signed in or sign out. Otherwise, you'll be signed out
                        automatically in 5 minutes.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <ul className="flex flex-col sm:flex-row gap-2 w-full">
                        <li className="flex">
                          <DialogClose asChild>
                            <Button variant="primary" className="flex-1">
                              Yes, stay signed in
                            </Button>
                          </DialogClose>
                        </li>
                        <li className="flex">
                          <DialogClose asChild>
                            <Button variant="link" className="flex-1">
                              Sign out
                            </Button>
                          </DialogClose>
                        </li>
                      </ul>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </section>

          {/* Button Examples */}
          <section id="buttons" className="mb-12 scroll-mt-16 tablet:scroll-mt-25 desktop:scroll-mt-25">
            <h2 className="text-3xl font-bold mb-6 font-merriweather">
              Buttons
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Button Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="warning">Warning</Button>
                  <Button variant="danger">Danger</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Button Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Card Examples */}
          <section id="cards" className="mb-12 scroll-mt-16 tablet:scroll-mt-25 desktop:scroll-mt-25">
            <h2 className="text-3xl font-bold mb-6 font-merriweather">Cards</h2>
            <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Service Overview</CardTitle>
                  <CardDescription>
                    Learn about our government services and how they can help
                    you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Access important information, forms, and resources all in
                    one place. Our services are designed to be accessible and
                    easy to use.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Learn More</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Apply for Benefits</CardTitle>
                  <CardDescription>
                    Start your application process today.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Complete your application online with our secure and
                    user-friendly forms. Get real-time updates on your
                    application status.
                  </p>
                </CardContent>
                <CardFooter className="space-x-2">
                  <Button variant="primary">Start Application</Button>
                  <Button variant="outline">View Status</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Support</CardTitle>
                  <CardDescription>Get help when you need it.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Our support team is available to help you navigate our
                    services and answer any questions you may have.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" className="w-full">
                    Contact Us
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Form Example */}
          <section id="forms" className="mb-12 scroll-mt-16 tablet:scroll-mt-25 desktop:scroll-mt-25">
            <h2 className="text-3xl font-bold mb-6 font-merriweather">Forms</h2>
            <Card className="max-w-2xl">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Please provide your contact details to get started.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-bold">
                    First Name *
                  </label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-bold">
                    Last Name *
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>
              </CardContent>
              <CardFooter className="space-x-2">
                <Button type="submit" className="flex-1">
                  Submit Form
                </Button>
                <Button variant="outline" type="reset">
                  Reset
                </Button>
              </CardFooter>
            </Card>
          </section>

          {/* Badge Examples */}
          <section id="badges" className="mb-12 scroll-mt-16 tablet:scroll-mt-25 desktop:scroll-mt-25">
            <h2 className="text-3xl font-bold mb-6 font-merriweather">
              Badges
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-4">Status Badges</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">In Progress</Badge>
                  <Badge variant="success">Approved</Badge>
                  <Badge variant="warning">Pending Review</Badge>
                  <Badge variant="danger">Rejected</Badge>
                  <Badge variant="secondary">Draft</Badge>
                  <Badge variant="outline">New</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Content with Badges</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 border border-gray-30 rounded">
                    <div>
                      <h4 className="font-bold">Application #12345</h4>
                      <p className="text-sm">Submitted on March 15, 2024</p>
                    </div>
                    <Badge variant="success">Approved</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-30 rounded">
                    <div>
                      <h4 className="font-bold">Document Review</h4>
                      <p className="text-sm">Submitted on March 18, 2024</p>
                    </div>
                    <Badge variant="warning">Under Review</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-30 rounded">
                    <div>
                      <h4 className="font-bold">Payment Processing</h4>
                      <p className="text-sm">Started on March 20, 2024</p>
                    </div>
                    <Badge variant="default">In Progress</Badge>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Typography Examples */}
          <section id="typography" className="mb-12 scroll-mt-16 tablet:scroll-mt-25 desktop:scroll-mt-25">
            <h2 className="text-3xl font-bold mb-6 font-merriweather">
              Typography
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Font Families</h3>
                <div className="space-y-3">
                  <p className="font-public-sans text-lg">
                    <span className="font-bold">Public Sans:</span> The default
                    font for body text and UI elements.
                  </p>
                  <p className="font-source-sans text-lg">
                    <span className="font-bold">Source Sans:</span> Alternative
                    sans-serif font for variety.
                  </p>
                  <p className="font-open-sans text-lg">
                    <span className="font-bold">Open Sans:</span> Another clean
                    sans-serif option.
                  </p>
                  <p className="font-merriweather text-lg">
                    <span className="font-bold">Merriweather:</span> Serif font
                    perfect for headings and emphasis.
                  </p>
                  <p className="font-roboto-mono text-lg">
                    <span className="font-bold">Roboto Mono:</span> Monospace
                    font for code and technical content.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* In-page navigation Example */}
          <section id="in-page-navigation" className="mb-12 scroll-mt-16 tablet:scroll-mt-25 desktop:scroll-mt-25">
            <h2 className="text-3xl font-bold mb-6 font-merriweather">
              In-page navigation
            </h2>
            <div className="grid grid-cols-1 tablet:grid-cols-3 gap-8">
              <aside className="tablet:col-span-1">
                <InPageNavigation
                  ariaLabel="Side navigation"
                  items={[
                    { label: "Overview", href: "#overview", isActive: true },
                    {
                      label: "Eligibility",
                      href: "#eligibility",
                      children: [
                        { label: "Citizens", href: "#eligibility-citizens" },
                        {
                          label: "Non-citizens",
                          href: "#eligibility-noncitizens",
                        },
                        { label: "Students", href: "#eligibility-students" },
                      ],
                    },
                    {
                      label: "How to apply",
                      href: "#apply",
                      children: [
                        { label: "Prepare documents", href: "#apply-docs" },
                        { label: "Submit application", href: "#apply-submit" },
                        { label: "After you apply", href: "#apply-after" },
                      ],
                    },
                    { label: "FAQ", href: "#faq" },
                  ]}
                />
              </aside>
              <div className="tablet:col-span-2 space-y-8">
                <section id="overview">
                  <h3 className="text-xl font-bold mb-2">Overview</h3>
                  <p className="text-gray-70">
                    This example shows a sidebar for navigating long content
                    pages using USWDS + Tailwind classes.
                  </p>
                </section>

                <section id="eligibility">
                  <h3 className="text-xl font-bold mb-2">Eligibility</h3>
                  <p className="text-gray-70">
                    General eligibility requirements are listed below.
                  </p>
                </section>
                <section id="eligibility-citizens">
                  <h4 className="font-semibold mb-2">Citizens</h4>
                  <p className="text-gray-70">Requirements for citizens.</p>
                </section>
                <section id="eligibility-noncitizens">
                  <h4 className="font-semibold mb-2">Non-citizens</h4>
                  <p className="text-gray-70">Requirements for non-citizens.</p>
                </section>
                <section id="eligibility-students">
                  <h4 className="font-semibold mb-2">Students</h4>
                  <p className="text-gray-70">Requirements for students.</p>
                </section>

                <section id="apply">
                  <h3 className="text-xl font-bold mb-2">How to apply</h3>
                  <p className="text-gray-70">
                    Follow the steps below to complete your application.
                  </p>
                </section>
                <section id="apply-docs">
                  <h4 className="font-semibold mb-2">Prepare documents</h4>
                  <p className="text-gray-70">
                    Gather all necessary documentation.
                  </p>
                </section>
                <section id="apply-submit">
                  <h4 className="font-semibold mb-2">Submit application</h4>
                  <p className="text-gray-70">
                    Submit your application through the online portal.
                  </p>
                </section>
                <section id="apply-after">
                  <h4 className="font-semibold mb-2">After you apply</h4>
                  <p className="text-gray-70">
                    What to expect after submission.
                  </p>
                </section>

                <section id="faq">
                  <h3 className="text-xl font-bold mb-2">FAQ</h3>
                  <p className="text-gray-70">Common questions and answers.</p>
                </section>
              </div>
            </div>
          </section>

          {/* Table Examples */}
          <section id="tables" className="mb-12 scroll-mt-16 tablet:scroll-mt-25 desktop:scroll-mt-25">
            <h2 className="text-3xl font-bold mb-6 font-merriweather text-gray-90">
              Tables
            </h2>

            <div className="space-y-8">
              {/* Basic Table */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-80">
                  Government Services Overview
                </h3>
                <Table>
                  <TableCaption>Government Services Overview</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead scope="col">Service ID</TableHead>
                      <TableHead scope="col">Service Name</TableHead>
                      <TableHead scope="col">Department</TableHead>
                      <TableHead scope="col">Status</TableHead>
                      <TableHead scope="col">Applications</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-roboto-mono">
                        SVC-001
                      </TableCell>
                      <TableCell>Passport Application</TableCell>
                      <TableCell>State Department</TableCell>
                      <TableCell>Active</TableCell>
                      <TableCell className="font-roboto-mono">2,847</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-roboto-mono">
                        SVC-002
                      </TableCell>
                      <TableCell>Social Security Benefits</TableCell>
                      <TableCell>Social Security Administration</TableCell>
                      <TableCell>Active</TableCell>
                      <TableCell className="font-roboto-mono">15,234</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-roboto-mono">
                        SVC-003
                      </TableCell>
                      <TableCell>Tax Filing Assistance</TableCell>
                      <TableCell>Internal Revenue Service</TableCell>
                      <TableCell>Maintenance</TableCell>
                      <TableCell className="font-roboto-mono">8,921</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-roboto-mono">
                        SVC-004
                      </TableCell>
                      <TableCell>Veterans Benefits</TableCell>
                      <TableCell>Department of Veterans Affairs</TableCell>
                      <TableCell>Active</TableCell>
                      <TableCell className="font-roboto-mono">4,567</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-roboto-mono">
                        SVC-005
                      </TableCell>
                      <TableCell>Medicare Enrollment</TableCell>
                      <TableCell>Centers for Medicare & Medicaid</TableCell>
                      <TableCell>Offline</TableCell>
                      <TableCell className="font-roboto-mono">12,089</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              {/* Application Status Table */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-80">
                  Recent Applications (Striped)
                </h3>
                <Table>
                  <TableCaption>
                    Recent Applications with Striped Rows
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead scope="col">Application #</TableHead>
                      <TableHead scope="col">Applicant Name</TableHead>
                      <TableHead scope="col">Service Type</TableHead>
                      <TableHead scope="col">Submitted</TableHead>
                      <TableHead scope="col">Status</TableHead>
                      <TableHead scope="col">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody striped>
                    <TableRow>
                      <TableCell className="font-roboto-mono">
                        #APP-2024-001
                      </TableCell>
                      <TableCell>John Smith</TableCell>
                      <TableCell>Passport Renewal</TableCell>
                      <TableCell>March 15, 2024</TableCell>
                      <TableCell>Approved</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-roboto-mono">
                        #APP-2024-002
                      </TableCell>
                      <TableCell>Sarah Johnson</TableCell>
                      <TableCell>Social Security Card</TableCell>
                      <TableCell>March 18, 2024</TableCell>
                      <TableCell>Under Review</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-roboto-mono">
                        #APP-2024-003
                      </TableCell>
                      <TableCell>Michael Davis</TableCell>
                      <TableCell>Veterans Benefits</TableCell>
                      <TableCell>March 20, 2024</TableCell>
                      <TableCell>In Progress</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-roboto-mono">
                        #APP-2024-004
                      </TableCell>
                      <TableCell>Emily Wilson</TableCell>
                      <TableCell>Medicare Enrollment</TableCell>
                      <TableCell>March 22, 2024</TableCell>
                      <TableCell>Rejected</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </section>

          {/* Pagination Examples */}
          <section id="pagination" className="mb-12 scroll-mt-16 tablet:scroll-mt-25 desktop:scroll-mt-25">
            <h2 className="text-3xl font-bold mb-6 font-merriweather">
              Pagination
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Bounded Pagination</h3>
                <Pagination>
                  <PaginationContent>
                    <PaginationPrevious href="#" />
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationEllipsis />
                    <PaginationItem>
                      <PaginationLink href="#">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        5
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">6</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">7</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isLast>
                        8
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationContent>
                </Pagination>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Unbounded Pagination</h3>
                <Pagination>
                  <PaginationContent>
                    <PaginationPrevious href="#" />
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationEllipsis />
                    <PaginationItem>
                      <PaginationLink href="#">5</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        6
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">7</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">8</PaginationLink>
                    </PaginationItem>
                    <PaginationEllipsis />
                    <PaginationNext href="#" />
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </section>

          {/* Checkbox Examples */}
          <section id="checkboxes" className="mb-12 scroll-mt-16 tablet:scroll-mt-25 desktop:scroll-mt-25">
            <h2 className="text-3xl font-bold mb-6 font-merriweather">
              Checkboxes
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Basic Checkboxes</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox id="terms-2" defaultChecked />
                    <div className="grid gap-2">
                      <Label htmlFor="terms-2">
                        Accept terms and conditions
                      </Label>
                      <p className="text-gray-60 text-sm">
                        By clicking this checkbox, you agree to the terms and
                        conditions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox id="notifications" disabled />
                    <Label htmlFor="notifications">
                      Enable notifications (disabled)
                    </Label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">
                  Historical Figures Selection
                </h3>
                <fieldset className="max-w-xs">
                  <legend className="leading-snug mb-3 font-bold text-base">
                    Select any historical figure
                  </legend>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Checkbox id="sojourner" />
                      <Label htmlFor="sojourner" className="cursor-pointer">
                        Sojourner Truth
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="frederick" defaultChecked />
                      <Label htmlFor="frederick" className="cursor-pointer">
                        Frederick Douglass
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="booker" />
                      <Label htmlFor="booker" className="cursor-pointer">
                        Booker T. Washington
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="george" defaultChecked />
                      <Label htmlFor="george" className="cursor-pointer">
                        George Washington Carver
                      </Label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Tiled Checkboxes</h3>
                <fieldset className="max-w-md">
                  <legend className="leading-snug mb-3 font-bold text-base">
                    Select government services
                  </legend>
                  <div className="space-y-2">
                    <Label
                      htmlFor="passport"
                      className="flex relative z-0 px-4 py-4 cursor-pointer rounded border-2 border-gray-20 bg-white hover:border-blue-60 has-[:checked]:border-blue-60 has-[:checked]:bg-blue-60/10"
                    >
                      <Checkbox id="passport" className="mt-0.5" />
                      <div className="pl-3">
                        <div className="font-medium">Passport Services</div>
                        <div className="text-sm text-gray-60 mt-1">
                          Apply for new passport or renew existing passport
                        </div>
                      </div>
                    </Label>

                    <Label
                      htmlFor="social-security"
                      className="flex relative z-0 px-4 py-4 cursor-pointer rounded border-2 border-gray-20 bg-white hover:border-blue-60 has-[:checked]:border-blue-60 has-[:checked]:bg-blue-60/10"
                    >
                      <Checkbox
                        id="social-security"
                        className="mt-0.5"
                        defaultChecked
                      />
                      <div className="pl-3">
                        <div className="font-medium">
                          Social Security Benefits
                        </div>
                        <div className="text-sm text-gray-60 mt-1">
                          Apply for retirement, disability, or survivor benefits
                        </div>
                      </div>
                    </Label>

                    <Label
                      htmlFor="veterans"
                      className="flex relative z-0 px-4 py-4 cursor-pointer rounded border-2 border-gray-20 bg-white hover:border-blue-60 has-[:checked]:border-blue-60 has-[:checked]:bg-blue-60/10"
                    >
                      <Checkbox id="veterans" className="mt-0.5" />
                      <div className="pl-3">
                        <div className="font-medium">Veterans Affairs</div>
                        <div className="text-sm text-gray-60 mt-1">
                          Access healthcare, disability compensation, and
                          education benefits
                        </div>
                      </div>
                    </Label>

                    <Label
                      htmlFor="medicare"
                      className="flex relative z-0 px-4 py-4 cursor-pointer rounded border-2 border-gray-10 bg-gray-5 text-gray-60 cursor-not-allowed"
                    >
                      <Checkbox id="medicare" className="mt-0.5" disabled />
                      <div className="pl-3">
                        <div className="font-medium">
                          Medicare Enrollment (Unavailable)
                        </div>
                        <div className="text-sm text-gray-50 mt-1">
                          Service temporarily unavailable for maintenance
                        </div>
                      </div>
                    </Label>
                  </div>
                </fieldset>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Form Integration</h3>
                <Card className="max-w-2xl">
                  <CardHeader>
                    <CardTitle>Privacy Settings</CardTitle>
                    <CardDescription>
                      Configure your privacy and notification preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox id="email-notifications" defaultChecked />
                      <Label
                        htmlFor="email-notifications"
                        className="cursor-pointer"
                      >
                        Email notifications
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="sms-notifications" />
                      <Label
                        htmlFor="sms-notifications"
                        className="cursor-pointer"
                      >
                        SMS notifications
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="marketing" />
                      <Label htmlFor="marketing" className="cursor-pointer">
                        Marketing communications
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="data-sharing" />
                      <Label htmlFor="data-sharing" className="cursor-pointer">
                        Allow data sharing for research
                      </Label>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Save Preferences</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>

          {/* Radio Group Examples */}
          <section id="radio-groups" className="mb-12 scroll-mt-16 tablet:scroll-mt-25 desktop:scroll-mt-25">
            <h2 className="text-3xl font-bold mb-6 font-merriweather">
              Radio Groups
            </h2>
            <div className="space-y-8">
              {/* Default Radio Groups */}
              <div>
                <h3 className="text-xl font-bold mb-4">Default Radio Groups</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">
                      Historical Figures
                    </h4>
                    <fieldset className="max-w-xs">
                      <legend className="sr-only">
                        Select one historical figure
                      </legend>
                      <RadioGroup
                        defaultValue="sojourner"
                        name="historical-figures-1"
                      >
                        <RadioGroupItem value="sojourner">
                          Sojourner Truth
                        </RadioGroupItem>
                        <RadioGroupItem value="frederick">
                          Frederick Douglass
                        </RadioGroupItem>
                        <RadioGroupItem value="booker">
                          Booker T. Washington
                        </RadioGroupItem>
                        <RadioGroupItem value="george">
                          George Washington Carver
                        </RadioGroupItem>
                      </RadioGroup>
                    </fieldset>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4">
                      Notification Preferences
                    </h4>
                    <fieldset className="max-w-xs">
                      <legend className="sr-only">
                        Select notification type
                      </legend>
                      <RadioGroup defaultValue="all" name="notifications-1">
                        <RadioGroupItem value="all">
                          All notifications
                        </RadioGroupItem>
                        <RadioGroupItem value="mentions">
                          Direct messages and mentions
                        </RadioGroupItem>
                        <RadioGroupItem value="none">Nothing</RadioGroupItem>
                      </RadioGroup>
                    </fieldset>
                  </div>
                </div>
              </div>

              {/* Tiled Radio Groups */}
              <div>
                <h3 className="text-xl font-bold mb-4">Tiled Radio Groups</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">
                      Document Types
                    </h4>
                    <fieldset className="max-w-md">
                      <legend className="sr-only">Select document type</legend>
                      <RadioGroup
                        variant="tiled"
                        defaultValue="passport"
                        name="documents"
                      >
                        <RadioGroupItem value="passport">
                          <div>
                            <div className="font-medium">U.S. Passport</div>
                            <div className="text-sm text-gray-60 mt-1">
                              Primary identification for international travel
                            </div>
                          </div>
                        </RadioGroupItem>
                        <RadioGroupItem value="license">
                          <div>
                            <div className="font-medium">Driver's License</div>
                            <div className="text-sm text-gray-60 mt-1">
                              State-issued identification for driving
                            </div>
                          </div>
                        </RadioGroupItem>
                        <RadioGroupItem value="id-card">
                          <div>
                            <div className="font-medium">State ID Card</div>
                            <div className="text-sm text-gray-60 mt-1">
                              Non-driver identification card
                            </div>
                          </div>
                        </RadioGroupItem>
                      </RadioGroup>
                    </fieldset>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4">
                      Service Options
                    </h4>
                    <fieldset className="max-w-md">
                      <legend className="sr-only">Select service option</legend>
                      <RadioGroup
                        variant="tiled"
                        defaultValue="standard"
                        name="service-options"
                      >
                        <RadioGroupItem value="standard">
                          <div>
                            <div className="font-medium">
                              Standard Processing
                            </div>
                            <div className="text-sm text-gray-60 mt-1">
                              6-8 weeks delivery time
                            </div>
                          </div>
                        </RadioGroupItem>
                        <RadioGroupItem value="expedited">
                          <div>
                            <div className="font-medium">
                              Expedited Processing
                            </div>
                            <div className="text-sm text-gray-60 mt-1">
                              2-3 weeks delivery time (+$60)
                            </div>
                          </div>
                        </RadioGroupItem>
                        <RadioGroupItem value="emergency" disabled>
                          <div>
                            <div className="font-medium">
                              Emergency Processing
                            </div>
                            <div className="text-sm text-gray-60 mt-1">
                              Currently unavailable
                            </div>
                          </div>
                        </RadioGroupItem>
                      </RadioGroup>
                    </fieldset>
                  </div>
                </div>
              </div>

              {/* Card Example with Radio Groups */}
              <div>
                <h3 className="text-xl font-bold mb-4">In Forms</h3>
                <Card className="max-w-md">
                  <CardHeader>
                    <CardTitle>Contact Method</CardTitle>
                    <CardDescription>
                      How would you prefer to be contacted about your
                      application?
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup name="contact-method" defaultValue="email">
                      <RadioGroupItem value="email">Email</RadioGroupItem>
                      <RadioGroupItem value="phone">Phone call</RadioGroupItem>
                      <RadioGroupItem value="mail">Postal mail</RadioGroupItem>
                      <RadioGroupItem value="none">
                        Do not contact me
                      </RadioGroupItem>
                    </RadioGroup>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Continue</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>

          {/* Search */}
          <section id="search-id" className="mb-12 scroll-mt-16 tablet:scroll-mt-25 desktop:scroll-mt-25">
            <h2 className="text-3xl font-bold mb-6 font-merriweather">Search</h2>
            <SearchExamples />
          </section>

          {/* Select */}
          <section id="select" className="mb-12 scroll-mt-16 tablet:scroll-mt-25 desktop:scroll-mt-25">
            <h2 className="text-3xl font-bold mb-6 font-merriweather">Select</h2>
            <SelectExamples />
          </section>

          <section id="lists" className="space-x-12 flex mb-12 scroll-mt-16 tablet:scroll-mt-25 desktop:scroll-mt-25">
            <ul className="list-disc pl-8 mt-4 space-y-1">
              <li>Unordered list item</li>
              <li>Unordered list item</li>
              <li>Unordered list item</li>
            </ul>

            <ol className="list-decimal pl-8 mt-4 space-y-1">
              <li>Ordered list item</li>
              <li>Ordered list item</li>
              <li>Ordered list item</li>
            </ol>

            <ul className="list-none pl-8 mt-4 space-y-1">
              <li>Unstyled list item</li>
              <li>Unstyled list item</li>
              <li>Unstyled list item</li>
            </ul>
          </section>
        </main>
      </div>

      <FooterComponent />
    </>
  );
}
