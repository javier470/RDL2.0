import {
    IconArrowGuide,
    IconBuilding,
    IconCalendar,
    IconChecklist,
    IconClipboard,
    IconFlag,
    IconHammer,
    IconHome,
    IconReport,
    IconReportAnalytics,
    IconSettings,
    IconTicket,
    IconUser,
    IconUserCheck,
  } from "@tabler/icons-react";

export const menuList = [
    {
        label: 'Inicio',
        link: '/dashboard',
        icon: <IconHome color='#2196f3'/>,
        childs: []
    },
    {
        label: 'Configuración',
        icon: <IconSettings color='#2196f3'/>,
        childs: [
            {
                label: 'Paises',
                link: '/countries',
                icon: <IconFlag color='#2196f3'/>,
            },
            {
                label: 'Compañias',
                link: '/companies',
                icon: <IconBuilding color='#2196f3'/>,
            },
            {
                label: 'Roles',
                link: '/roles',
                icon: <IconUserCheck color='#2196f3'/>,
            },
            {
                label: 'Usuarios',
                link: '/users',
                icon: <IconUser color='#2196f3'/>,
            },
        ]
    },
    {
        label: 'Proyectos',
        icon: <IconHammer color='#2196f3'/>,
        childs: [
            {
                label: 'Proyectos',
                link: '/projects',
                icon: <IconReportAnalytics color='#2196f3'/>,
            },
            {
                label: 'Hitos',
                link: '/steps',
                icon: <IconArrowGuide color='#2196f3'/>,
            },
            {
                label: 'Tareas',
                link: '/tasks',
                icon: <IconClipboard color='#2196f3'/>,
            },
        ]
    },
    {
        label: 'Mis Tareas',
        icon: <IconChecklist color='#2196f3'/>,
        link: '/mytasks',
        childs: []
    },
    {
        label: 'Tickets',
        icon: <IconTicket color='#2196f3'/>,
        link: '/tickets',
        childs: []
    },
    {
        label: 'Reportes',
        icon: <IconReport color='#2196f3'/>,
        link: '/reports',
        childs: []
    },
    {
        label: 'Calendario',
        icon: <IconCalendar color='#2196f3'/>,
        link: '/calendar',
        childs: []
    }
]