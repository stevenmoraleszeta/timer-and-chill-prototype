import React, { useCallback } from 'react'
import { SoundPlayer } from './SoundPlayer'
import { SOUNDS, SOUND_PRESETS } from '../constants'
import { useSoundContext } from '../contexts/SoundContext'
import { useLanguage } from '../contexts/LanguageContext'
import { storage } from '../utils'
import styles from './SoundControls.module.css'

export const SoundControls: React.FC = () => {
  const { t } = useLanguage()
  const { applyPreset } = useSoundContext()

  const handlePresetClick = useCallback(
    (preset: (typeof SOUND_PRESETS)[0]) => {
      // Get saved volumes for all sounds
      const savedVolumes = storage.getSoundsVolume()

      // Apply preset but use saved volumes if they exist, otherwise use preset volumes
      const soundsWithSavedVolumes = preset.sounds.map(({ id, volume: presetVolume }) => ({
        id,
        volume: savedVolumes[id] ?? presetVolume, // Use saved volume if exists, otherwise preset volume
      }))

      applyPreset(soundsWithSavedVolumes)
    },
    [applyPreset]
  )

  return (
    <div className={styles.container} role="region" aria-label="Ambient sounds">
      {/* Sound Presets */}
      <div className={styles.presetsSection}>
        <div className={styles.presetsButtons}>
          {SOUND_PRESETS.map((preset) => {
            const presetName = 
              preset.id === 'focus' ? t.soundPresets.focus :
              preset.id === 'cafe' ? t.soundPresets.coffeeShop :
              preset.id === 'nature' ? t.soundPresets.nature :
              t.soundPresets.restaurant
            const presetDesc =
              preset.id === 'focus' ? t.soundPresets.focusDesc :
              preset.id === 'cafe' ? t.soundPresets.coffeeShopDesc :
              preset.id === 'nature' ? t.soundPresets.natureDesc :
              t.soundPresets.restaurantDesc
            return (
              <button
                key={preset.id}
                className={styles.presetButton}
                onClick={() => handlePresetClick(preset)}
                aria-label={`Apply ${presetName} sound preset`}
                title={presetDesc}
              >
                {presetName}
              </button>
            )
          })}
        </div>
      </div>

      {/* Individual Sound Controls */}
      <div className={styles.soundsSection}>
        {SOUNDS.map((sound) => {
          const soundName =
            sound.id === 'rain' ? t.sounds.rain :
            sound.id === 'forest' ? t.sounds.forest :
            sound.id === 'cafe' ? t.sounds.cafe :
            sound.id === 'garden' ? t.sounds.garden :
            sound.id === 'farm' ? t.sounds.farm :
            t.sounds.restaurant
          return (
            <SoundPlayer
              key={sound.id}
              id={sound.id}
              name={soundName}
              audioSrc={sound.audioSrc}
              defaultVolume={sound.defaultVolume}
            />
          )
        })}
      </div>
    </div>
  )
}

