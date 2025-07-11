const steps = [
  {
    title: "Закажи мероприятие",
    description: "Согласуй условия и подтверди дату",
  },
  {
    title: "Мы приедем заранее",
    description: "Наша команда все подготовит до начала мероприятия",
  },
  {
    title: "Наслаждайся праздником",
    description: "Отдыхай, а мы заботимся о дымной атмосфере",
  },
  {
    title: "Полная уборка",
    description:
      "Мы полностью уберем кальянную зону после завершения праздника",
  },
];

export default function CateringStepsSection() {
  return (
    <section className="py-20 px-20">
      <h2 className="font-heading text-5xl font-semibold text-center">
        Как это <span className="text-gradient">работает</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 pt-15 gap-8">
        {steps.map(({ title, description }, index) => {
          return (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 bg-gradient rounded-full text-xl font-semibold flex items-center justify-center">
                {index + 1}
              </div>
              <h4 className="font-semibold font-heading text-lg">{title}</h4>
              <p className="text-muted-foreground">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
