import { Card, CardBody } from "@nextui-org/card";

const features = [
  {
    title: "Easy Upload",
    description:
      "Simply upload a photo of your medical document and get instant results.",
  },
  {
    title: "AI-Powered Analysis",
    description:
      "Our advanced AI technology deciphers complex medical terminology and handwriting.",
  },
  {
    title: "Simplified Explanations",
    description:
      "Receive clear, easy-to-understand explanations of your medical documents.",
  },
  {
    title: "Secure & Private",
    description:
      "Your data is encrypted and never stored, ensuring your privacy and security.",
  },
];

export default function Features() {
  return (
    <div className="py-16 my-14">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose MediClarity?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardBody>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
