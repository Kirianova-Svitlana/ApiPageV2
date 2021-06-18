import React, {Fragment} from 'react'
import OterDataPart from './OterDataPart'

const CollapsedSectionRow = ({
    row,
    section,
    sections,
    setSections,
    setCheckedSections,
    initialCheckedSections,
    setCheckedColumnsToShow,
    checkedColumnsToShow,
    setDataKeyItems,
    dataKeyItems
  }) => {
  const selectUnselectValue = () => {
    const newSections = sections.map((s) => {
      if (s.sectionId === section.sectionId) {
        const newSectionRow = s.sectionFilds.map(field => {
          if (field.id === row.id) {
            return {
              ...field,
              isChecked: !field.isChecked
            }
          }
          return field
        })
        return {
          ...s,
          sectionFilds: newSectionRow
        }
      }
      return s
    })
    setSections(newSections)
    const sectionsForSave = []
    newSections.map(section => {
      const checkedInSection = section.sectionFilds.filter(sectionRow => sectionRow.isChecked)
      if (checkedInSection.length !== 0) {
        checkedInSection.map(s => {
          sectionsForSave.push(s.objectRequest)
        })
      }
      const arr = sectionsForSave.concat(initialCheckedSections)
      const sorted = arr.sort((a,b) => {
        return (a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0
      })
      setCheckedSections(sorted)
      setCheckedColumnsToShow(sorted)
    })
  }

  return <Fragment>
  <div className="row params" onClick={selectUnselectValue}>
    <div className="col-md-1">
      <div className="form-control">
        <input
          type="checkbox"
          id={"checkbox-" + row.id}
          name={row.id}
          checked={row.isChecked}
          onChange={() => {}} />
      </div>
    </div>
    <div className="col-md-2">
      <div className="form-control">
        <label>{row.id}</label>
      </div>
    </div>
    <div className="col-md-2">
          <div className="form-control">
            <p htmlFor="checkbox-4">{row.size ?  row.type +  '(' + row.size + ')' : null}</p>
          </div>
        </div>
    <div className="col-md-7">
      <p>{row.description}</p>
    </div>
  </div>
  {
    row.id === 'audios' && row.isChecked ?
    <div className='section'>
      <div className='section-name' id='audios'>Audios (0 to n AudioFile objects)</div>
      <div className='section-name-sm'>AudioFile Object</div>

      <div className='table'>
        <div className='table-header'>
          <div className='table-cell name'>Field Name</div>
          <div className='table-cell type'>Type</div>
          <div className='table-cell size'>Size</div>
          <div className='table-cell required'>Required</div>
          <div className='table-cell comments'>Comments/Notes</div>
        </div>
        <div className='table-row'>
          <div className='table-cell name'>audio_file</div>
          <div className='table-cell type'>String</div>
          <div className='table-cell size'>500</div>
          <div className='table-cell required'>Yes</div>
          <div className='table-cell comments'>protocols are all supported.  Please contact me for other protocols</div>
        </div>
        <div className='table-row'>
          <div className='table-cell name'>order</div>
          <div className='table-cell type'>Int</div>
          <div className='table-cell size'>4</div>
          <div className='table-cell required'>No</div>
          <div className='table-cell comments'>If you have the files in order, populate this</div>
        </div>
        <div className='table-row'>
          <div className='table-cell name'>file_date</div>
          <div className='table-cell type'>Varchar</div>
          <div className='table-cell size'>100</div>
          <div className='table-cell required'>No</div>
          <div className='table-cell comments'>If you have the files in chronological order, populate this</div>
        </div>
      </div>
    </div> : null
  }
  {
    row.id === 'OtherDataItems' && row.isChecked ?
    <OterDataPart setDataKeyItems={setDataKeyItems} dataKeyItems={dataKeyItems}/> : null
  }
  </Fragment>
}

export default CollapsedSectionRow
