interface LabelImage {
  url: string;
  alt: string;
  description: string;
}

interface Label {
  description: string;
  images: LabelImage[];
}

export const LABELS: Label[] = [
  {
    description: "Máscara",
    images: [
      {
        url: "/required-mask.png",
        alt: "Obrigatória",
        description: "Obrigatória",
      },
      {
        url: "/recommended-mask.png",
        alt: "Recomendada",
        description: "Recomendada",
      },
    ],
  },
  {
    description: "Toalha",
    images: [
      {
        url: "/required-towel.png",
        alt: "Obrigatória",
        description: "Obrigatória",
      },
      {
        url: "/recommended-towel.png",
        alt: "Recomendada",
        description: "Recomendada",
      },
    ],
  },
  {
    description: "Bebedouro",
    images: [
      {
        url: "/partial-fountain.png",
        alt: "Parcial",
        description: "Parcial",
      },
      {
        url: "/not_allowed-fountain.png",
        alt: "Proibido",
        description: "Proibido",
      },
    ],
  },
  {
    description: "Vestiários",
    images: [
      {
        url: "/allowed-lockerroom.png",
        alt: "Liberado",
        description: "Liberado",
      },
      {
        url: "/partial-lockerroom.png",
        alt: "Paricial",
        description: "Parcial",
      },
      {
        url: "/closed-lockerroom.png",
        alt: "Fechado",
        description: "Fechado",
      },
    ],
  },
];
