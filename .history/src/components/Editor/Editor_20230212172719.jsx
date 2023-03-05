import React from 'react'
import styles from './Editor.module.css'

function Editor(props) {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            {Object.keys(sections)?.map(item=>(
                <div className={styles.sections}></div>
            ))}
        </div>
    </div>
  )
}

export default Editor