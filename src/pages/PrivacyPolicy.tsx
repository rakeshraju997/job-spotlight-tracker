import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Eye, Lock, Database, UserCheck, Mail } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center pb-8">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Privacy Policy
              </CardTitle>
              <p className="text-muted-foreground mt-2">Last updated: {new Date().toLocaleDateString()}</p>
            </CardHeader>
            
            <CardContent className="space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-primary">1. Information We Collect</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information you provide directly to us, such as when you create an account, apply for jobs, or contact us.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <h4 className="font-semibold mb-2">Personal Information</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Name and contact information</li>
                      <li>• Professional experience</li>
                      <li>• Education background</li>
                      <li>• Skills and qualifications</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <h4 className="font-semibold mb-2">Usage Information</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Device and browser information</li>
                      <li>• IP address and location data</li>
                      <li>• Usage patterns and preferences</li>
                      <li>• Cookies and similar technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              <Separator />

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Database className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-primary">2. How We Use Your Information</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to provide, maintain, and improve our services:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg">
                    <UserCheck className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <h4 className="font-medium">Account Management</h4>
                      <p className="text-sm text-muted-foreground">Create and manage your account, authenticate users</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg">
                    <Mail className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <h4 className="font-medium">Communication</h4>
                      <p className="text-sm text-muted-foreground">Send job alerts, updates, and respond to inquiries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg">
                    <Shield className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <h4 className="font-medium">Job Matching</h4>
                      <p className="text-sm text-muted-foreground">Connect job seekers with relevant opportunities</p>
                    </div>
                  </div>
                </div>
              </section>

              <Separator />

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-primary">3. Information Sharing</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except as described below:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>With employers when you apply for jobs (with your consent)</li>
                  <li>With service providers who assist in our operations</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Lock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-medium mb-1">Encryption</h4>
                    <p className="text-sm text-muted-foreground">Data encrypted in transit and at rest</p>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-medium mb-1">Access Control</h4>
                    <p className="text-sm text-muted-foreground">Limited access to authorized personnel</p>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Database className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-medium mb-1">Regular Audits</h4>
                    <p className="text-sm text-muted-foreground">Security assessments and updates</p>
                  </div>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">5. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have certain rights regarding your personal information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Access and review your personal data</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your account and data</li>
                  </ul>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Port your data to another service</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Object to certain processing activities</li>
                  </ul>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">6. Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use cookies and similar technologies to enhance your experience:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Essential cookies for platform functionality</li>
                  <li>Analytics cookies to improve our services</li>
                  <li>Preference cookies to remember your settings</li>
                  <li>Marketing cookies for relevant job recommendations</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">7. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services and comply with legal obligations.
                  You may request deletion of your data at any time by contacting us.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">8. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> privacy@jobplatform.com<br />
                    <strong>Address:</strong> 123 Privacy Street, Data City, DC 12345<br />
                    <strong>Phone:</strong> (555) 123-4567
                  </p>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}