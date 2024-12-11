import { SquareTerminal, Settings2, LifeBuoy, Send } from "lucide-react"
import { type LucideIcon } from "lucide-react"

// Tipo base para itens de navegação
type BaseRoute = {
  title: string
  url: string
  isActive?: boolean
}

// Tipo para rotas principais que requerem ícone
type MainRoute = BaseRoute & {
  icon: LucideIcon
  items?: Omit<BaseRoute, 'icon' | 'items'>[]
}

// Tipo para rotas secundárias que também requerem ícone
type SecondaryRoute = BaseRoute & {
  icon: LucideIcon
}

// Tipo para rotas de configurações (sem ícone)
type SettingsRoute = BaseRoute

type Routes = {
  navMain: MainRoute[]
  navSecondary: SecondaryRoute[]
  navSettings: SettingsRoute[]
}

export const routes: Routes = {
  navMain: [
    {
      title: "Tarefas",
      url: "/app",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Settings",
      url: "/app/settings",
      icon: Settings2,
      items: [
        {
          title: "Meu perfil",
          url: "/app/settings",
        },
        {
          title: "Aparência",
          url: "/app/settings/theme",
        },
        {
          title: "Assinatura",
          url: "/app/settings/billing",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  navSettings: [
    {
      title: "Meu perfil",
      url: "/app/settings",
    },
    {
      title: "Aparência",
      url: "/app/settings/theme",
    },
    {
      title: "Assinatura",
      url: "/app/settings/billing",
    },
  ]
}

export type { BaseRoute, MainRoute, SecondaryRoute, SettingsRoute, Routes }