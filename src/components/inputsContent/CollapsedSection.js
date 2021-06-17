import React, {useState} from 'react'

import CollapsedSectionRow from './CollapsedSectionRow'

const CollapsedSection = ({
    section,
    sections,
    setSections,
    checkedSections,
    setCheckedSections,
    initialCheckedSections,
    setCheckedColumnsToShow,
    checkedColumnsToShow,
  }) => {
  const show = section.sectionFilds.find(row => row.isChecked)
  const [isCollapsed, setCollapsed] = useState(!show)
  
  const handleClick = () => {
    setCollapsed(!isCollapsed)
  }

  return <div className="card">
    <div className="card-header" id={section.sectionId}>
      <h2 className="mb-0">
        <button
          className={isCollapsed ? "btn btn-link collapsed" : "btn btn-link" }
          type="button"
          data-toggle="collapse"
          data-target={'#' + section.dataTarget}
          aria-expanded={isCollapsed ? 'true' : 'false'}
          aria-controls={section.dataTarget}
          onClick={handleClick}>
          {section.sectionName}
        </button>
      </h2>
    </div>
    <div
      id={section.dataTarget}
      className={isCollapsed ? "collapse" : "collapse show"}
      aria-labelledby={section.sectionId}
      data-parent="#accordionParams">
      <div className="card-body">
        {
          section.sectionFilds.map((sectionRow, index) => {
            return <CollapsedSectionRow
              row={sectionRow}
              key={'section-' + sectionRow.id}
              section={section}
              sections={sections}
              setSections={setSections}
              setCheckedSections={setCheckedSections}
              initialCheckedSections={initialCheckedSections}
              setCheckedColumnsToShow={setCheckedColumnsToShow}
              checkedColumnsToShow={checkedColumnsToShow}
            />
          })
        }
      </div>
    </div>
  </div>
} 

export default CollapsedSection