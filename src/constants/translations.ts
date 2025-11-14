import { Language } from '../types'

export interface Translations {
  // Timer
  timer: {
    start: string
    pause: string
    reset: string
    edit: string
    save: string
    pomodoro: string
    work: string
    break: string
    stop: string
    session: string
  }
  // Statistics
  statistics: {
    title: string
    show: string
    hide: string
    close: string
    sessionsCompleted: string
    totalTime: string
    averageDuration: string
    lastSession: string
  }
  // Sounds
  sounds: {
    rain: string
    forest: string
    cafe: string
    garden: string
    farm: string
    restaurant: string
    play: string
    pause: string
    volume: string
  }
  // Sound Presets
  soundPresets: {
    focus: string
    coffeeShop: string
    nature: string
    restaurant: string
    focusDesc: string
    coffeeShopDesc: string
    natureDesc: string
    restaurantDesc: string
  }
  // Activities
  activities: string[]
  // Notifications
  notifications: {
    timerComplete: string
    timerCompleteBody: string
    breakTime: string
    breakTimeBody: (minutes: number, session: number) => string
    workTime: string
    workTimeBody: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    timer: {
      start: 'Start',
      pause: 'Pause',
      reset: 'Reset',
      edit: 'Edit',
      save: 'Save',
      pomodoro: 'Pomodoro',
      work: 'Work',
      break: 'Break',
      stop: 'Stop',
      session: 'Session',
    },
    statistics: {
      title: 'Timer Statistics',
      show: 'Show statistics',
      hide: 'Hide statistics',
      close: 'Close statistics',
      sessionsCompleted: 'Sessions Completed',
      totalTime: 'Total Time',
      averageDuration: 'Average Duration',
      lastSession: 'Last Session',
    },
    sounds: {
      rain: 'Rain',
      forest: 'Forest',
      cafe: 'Cafe',
      garden: 'Garden',
      farm: 'Farm',
      restaurant: 'Restaurant',
      play: 'Play',
      pause: 'Pause',
      volume: 'volume',
    },
    soundPresets: {
      focus: 'Focus',
      coffeeShop: 'Coffee Shop',
      nature: 'Nature',
      restaurant: 'Restaurant',
      focusDesc: 'Perfect for deep work',
      coffeeShopDesc: 'Cafe ambiance',
      natureDesc: 'Natural sounds',
      restaurantDesc: 'Restaurant ambiance',
    },
    activities: [
      'Studying',
      'Reading',
      'Drawing',
      'Writing',
      'Sleeping',
      'Resting',
      'Programming',
      'Working',
      'Focusing',
      'Meditating',
      'Coding',
      'Learning',
      'Creating',
      'Designing',
      'Planning',
      'Thinking',
      'Reflecting',
      'Relaxing',
    ],
    notifications: {
      timerComplete: 'Timer Complete',
      timerCompleteBody: 'Time is up!',
      breakTime: 'Break Time!',
      breakTimeBody: (minutes: number, session: number) => `Take a ${minutes}-minute break. Session ${session} completed!`,
      workTime: 'Work Time!',
      workTimeBody: 'Time to focus!',
    },
  },
  es: {
    timer: {
      start: 'Iniciar',
      pause: 'Pausar',
      reset: 'Reiniciar',
      edit: 'Editar',
      save: 'Guardar',
      pomodoro: 'Pomodoro',
      work: 'Trabajo',
      break: 'Descanso',
      stop: 'Detener',
      session: 'Sesión',
    },
    statistics: {
      title: 'Estadísticas del Temporizador',
      show: 'Mostrar estadísticas',
      hide: 'Ocultar estadísticas',
      close: 'Cerrar estadísticas',
      sessionsCompleted: 'Sesiones Completadas',
      totalTime: 'Tiempo Total',
      averageDuration: 'Duración Promedio',
      lastSession: 'Última Sesión',
    },
    sounds: {
      rain: 'Lluvia',
      forest: 'Bosque',
      cafe: 'Café',
      garden: 'Jardín',
      farm: 'Granja',
      restaurant: 'Restaurante',
      play: 'Reproducir',
      pause: 'Pausar',
      volume: 'volumen',
    },
    soundPresets: {
      focus: 'Concentración',
      coffeeShop: 'Cafetería',
      nature: 'Naturaleza',
      restaurant: 'Restaurante',
      focusDesc: 'Perfecto para trabajo profundo',
      coffeeShopDesc: 'Ambiente de cafetería',
      natureDesc: 'Sonidos naturales',
      restaurantDesc: 'Ambiente de restaurante',
    },
    activities: [
      'Estudiando',
      'Leyendo',
      'Dibujando',
      'Escribiendo',
      'Durmiendo',
      'Descansando',
      'Programando',
      'Trabajando',
      'Concentrándose',
      'Meditando',
      'Codificando',
      'Aprendiendo',
      'Creando',
      'Diseñando',
      'Planificando',
      'Pensando',
      'Reflexionando',
      'Relajándose',
    ],
    notifications: {
      timerComplete: 'Temporizador Completo',
      timerCompleteBody: '¡El tiempo ha terminado!',
      breakTime: '¡Hora de Descanso!',
      breakTimeBody: (minutes: number, session: number) => `Toma un descanso de ${minutes} minutos. ¡Sesión ${session} completada!`,
      workTime: '¡Hora de Trabajar!',
      workTimeBody: '¡Hora de concentrarse!',
    },
  },
}

