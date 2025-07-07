import { Instagram, Youtube, Music, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#", followers: "45K" },
    { icon: Youtube, label: "YouTube", href: "#", followers: "12K" },
    { icon: Music, label: "Spotify", href: "#", followers: "8K" },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-red-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Entre em <span className="text-red-500">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Quer contratar o Grupo LIED para seu evento? Entre em contato conosco e vamos fazer uma festa inesquecível!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Seu nome"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
                <Input
                  type="email"
                  placeholder="Seu email"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
              </div>
              <Input
                placeholder="Assunto"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Textarea
                placeholder="Sua mensagem..."
                rows={5}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                <Mail className="mr-2 h-4 w-4" />
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 text-red-500 mr-3" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 text-red-500 mr-3" />
                  <span>contato@grupolied.com.br</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 text-red-500 mr-3" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {socialLinks.map((social, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center">
                        <social.icon className="h-6 w-6 text-red-500 mr-3" />
                        <div>
                          <div className="text-white font-medium">{social.label}</div>
                          <div className="text-gray-400 text-sm">{social.followers} seguidores</div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-transparent"
                      >
                        Seguir
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
