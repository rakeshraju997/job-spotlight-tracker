import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Terms and Conditions
              </CardTitle>
              <p className="text-muted-foreground mt-2">Last updated: {new Date().toLocaleDateString()}</p>
            </CardHeader>
            
            <CardContent className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using this job platform, you accept and agree to be bound by the terms and provision of this agreement.
                  If you do not agree to these terms, you should not use this service.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">2. Use License</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Permission is granted to temporarily access the materials on our job platform for personal, non-commercial transitory viewing only.
                  This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the platform</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">3. User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times.
                  You are responsible for safeguarding the password and for all activities that occur under your account.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>You must be at least 18 years old to create an account</li>
                  <li>You are responsible for maintaining the confidentiality of your account</li>
                  <li>You agree to notify us immediately of any unauthorized use of your account</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">4. Job Postings and Applications</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our platform connects job seekers with employers. We are not an employer and do not guarantee employment.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Job postings must be legitimate and comply with applicable laws</li>
                  <li>We reserve the right to remove any job posting at our discretion</li>
                  <li>Users must provide accurate information in their profiles and applications</li>
                  <li>We are not responsible for the hiring decisions of employers</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">5. Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service,
                  to understand our practices.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">6. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability,
                  under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">7. Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The information on this platform is provided on an 'as is' basis. To the fullest extent permitted by law,
                  we exclude all representations, warranties, and conditions relating to our platform and the use of this platform.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">8. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us at legal@jobplatform.com
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}