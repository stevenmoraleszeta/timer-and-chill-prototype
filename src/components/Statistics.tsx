import React, { useState, useMemo, useCallback } from 'react'
import { storage } from '../utils'
import styles from './Statistics.module.css'

export const Statistics: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const stats = storage.getTimerStatistics()

  const formatDuration = useCallback((seconds: number): string => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`
    } else {
      return `${secs}s`
    }
  }, [])

  const averageDuration = useMemo(
    () => (stats.totalCompleted > 0 ? Math.round(stats.totalTime / stats.totalCompleted) : 0),
    [stats.totalCompleted, stats.totalTime]
  )

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const closePanel = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <div className={styles.container}>
      <button
        className={styles.toggleButton}
        onClick={toggleOpen}
        aria-label={isOpen ? 'Hide statistics' : 'Show statistics'}
        aria-expanded={isOpen}
      >
        📊 Statistics
      </button>

      {isOpen && (
        <div className={styles.statsPanel}>
          <div className={styles.statsHeader}>
            <h3>Timer Statistics</h3>
            <button
              className={styles.closeButton}
              onClick={closePanel}
              aria-label="Close statistics"
            >
              ×
            </button>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{stats.totalCompleted}</div>
              <div className={styles.statLabel}>Sessions Completed</div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statValue}>{formatDuration(stats.totalTime)}</div>
              <div className={styles.statLabel}>Total Time</div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statValue}>{formatDuration(averageDuration)}</div>
              <div className={styles.statLabel}>Average Duration</div>
            </div>

            {stats.lastCompleted && (
              <div className={styles.statCard}>
                <div className={styles.statValue}>
                  {new Date(stats.lastCompleted).toLocaleDateString()}
                </div>
                <div className={styles.statLabel}>Last Session</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

