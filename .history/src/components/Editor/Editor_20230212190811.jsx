import React,{useState} from 'react'
import styles from './Editor.module.css'

function Editor(props) {
    const sections = props.sections;
    const [activeSectionKey, setActiveSectionKey] = useState(
        Object.keys(sections)[0]
    );

    const workExpBody = (
      <div className={styles.detail}>
        <div className={styles.row}>
          <InputControl
            label="Title"
            placeholder="Enter title eg. Frontend developer"
            value={values.title}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, title: event.target.value }))
            }
          />
          <InputControl
            label="Company Name"
            placeholder="Enter company name eg. amazon"
            value={values.companyName}
            onChange={(event) =>
              setValues((prev) => ({
                ...prev,
                companyName: event.target.value,
              }))
            }
          />
        </div>
        <div className={styles.row}>
          <InputControl
            label="Certificate Link"
            placeholder="Enter certificate link"
            value={values.certificationLink}
            onChange={(event) =>
              setValues((prev) => ({
                ...prev,
                certificationLink: event.target.value,
              }))
            }
          />
          <InputControl
            label="Location"
            placeholder="Enter location eg. Remote"
            value={values.location}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, location: event.target.value }))
            }
          />
        </div>
        <div className={styles.row}>
          <InputControl
            label="Start Date"
            type="date"
            placeholder="Enter start date of work"
            value={values.startDate}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, startDate: event.target.value }))
            }
          />
          <InputControl
            label="End Date"
            type="date"
            placeholder="Enter end date of work"
            value={values.endDate}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, endDate: event.target.value }))
            }
          />
        </div>

        <div className={styles.column}>
          <label>Enter work description</label>
          <InputControl
            placeholder="Line 1"
            value={values.points ? values.points[0] : ""}
            onChange={(event) => handlePointUpdate(event.target.value, 0)}
          />
          <InputControl
            placeholder="Line 2"
            value={values.points ? values.points[1] : ""}
            onChange={(event) => handlePointUpdate(event.target.value, 1)}
          />
          <InputControl
            placeholder="Line 3"
            value={values.points ? values.points[2] : ""}
            onChange={(event) => handlePointUpdate(event.target.value, 2)}
          />
        </div>
      </div>
    );
    const projectBody = (
      <div className={styles.detail}>
        <div className={styles.row}>
          <InputControl
            label="Title"
            value={values.title}
            placeholder="Enter title eg. Chat app"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, title: event.target.value }))
            }
          />
        </div>
        <InputControl
          label="Overview"
          value={values.overview}
          placeholder="Enter basic overview of project"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, overview: event.target.value }))
          }
        />
        <div className={styles.row}>
          <InputControl
            label="Deployed Link"
            value={values.link}
            placeholder="Enter deployed link of project"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, link: event.target.value }))
            }
          />
          <InputControl
            label="Github Link"
            value={values.github}
            placeholder="Enter github link of project"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, github: event.target.value }))
            }
          />
        </div>
        <div className={styles.column}>
          <label>Enter project description</label>
          <InputControl
            placeholder="Line 1"
            value={values.points ? values.points[0] : ""}
            onChange={(event) => handlePointUpdate(event.target.value, 0)}
          />
          <InputControl
            placeholder="Line 2"
            value={values.points ? values.points[1] : ""}
            onChange={(event) => handlePointUpdate(event.target.value, 1)}
          />
          <InputControl
            placeholder="Line 3"
            value={values.points ? values.points[2] : ""}
            onChange={(event) => handlePointUpdate(event.target.value, 2)}
          />
          <InputControl
            placeholder="Line 4"
            value={values.points ? values.points[3] : ""}
            onChange={(event) => handlePointUpdate(event.target.value, 3)}
          />
        </div>
      </div>
    );
    const educationBody = (
      <div className={styles.detail}>
        <div className={styles.row}>
          <InputControl
            label="Title"
            value={values.title}
            placeholder="Enter title eg. B-tech"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, title: event.target.value }))
            }
          />
        </div>
        <InputControl
          label="College/School Name"
          value={values.college}
          placeholder="Enter name of your college/school"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, college: event.target.value }))
          }
        />
        <div className={styles.row}>
          <InputControl
            label="Start Date"
            type="date"
            placeholder="Enter start date of this education"
            value={values.startDate}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, startDate: event.target.value }))
            }
          />
          <InputControl
            label="End Date"
            type="date"
            placeholder="Enter end date of this education"
            value={values.endDate}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, endDate: event.target.value }))
            }
          />
        </div>
      </div>
    );
    const basicInfoBody = (
      <div className={styles.detail}>
        <div className={styles.row}>
          <InputControl
            label="Name"
            placeholder="Enter your full name eg. Aashu"
            value={values.name}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
          <InputControl
            label="Title"
            value={values.title}
            placeholder="Enter your title eg. Frontend developer"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, title: event.target.value }))
            }
          />
        </div>
        <div className={styles.row}>
          <InputControl
            label="Linkedin Link"
            value={values.linkedin}
            placeholder="Enter your linkedin profile link"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, linkedin: event.target.value }))
            }
          />
          <InputControl
            label="Github Link"
            value={values.github}
            placeholder="Enter your github profile link"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, github: event.target.value }))
            }
          />
        </div>
        <div className={styles.row}>
          <InputControl
            label="Email"
            value={values.email}
            placeholder="Enter your email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <InputControl
            label="Enter phone"
            value={values.phone}
            placeholder="Enter your phone number"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, phone: event.target.value }))
            }
          />
        </div>
      </div>
    );
    const achievementsBody = (
      <div className={styles.detail}>
        <div className={styles.column}>
          <label>List your achievements</label>
          <InputControl
            placeholder="Line 1"
            value={values.points ? values.points[0] : ""}
            onChange={(event) => handlePointUpdate(event.target.value, 0)}
          />
          <InputControl
            placeholder="Line 2"
            value={values.points ? values.points[1] : ""}
            onChange={(event) => handlePointUpdate(event.target.value, 1)}
          />
          <InputControl
            placeholder="Line 3"
            value={values.points ? values.points[2] : ""}
            onChange={(event) => handlePointUpdate(event.target.value, 2)}
          />
          <InputControl
            placeholder="Line 4"
            value={values.points ? values.points[3] : ""}
            onChange={(event) => handlePointUpdate(event.target.value, 3)}
          />
        </div>
      </div>
    );
    const summaryBody = (
      <div className={styles.detail}>
        <InputControl
          label="Summary"
          value={values.summary}
          placeholder="Enter your objective/summary"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, summary: event.target.value }))
          }
        />
      </div>
    );
    const otherBody = (
      <div className={styles.detail}>
        <InputControl
          label="Other"
          value={values.other}
          placeholder="Enter something"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, other: event.target.value }))
          }
        />
      </div>
    );
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            {Object.keys(sections)?.map((key)=>(
                <div className={`${styles.section} ${activeSectionKey === key ? styles.active : ""}`} 
                key={key}
                onClick={()=>setActiveSectionKey(key)}>
                    {sections[key]}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Editor