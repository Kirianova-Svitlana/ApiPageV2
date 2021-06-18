import React, {useState} from 'react'

const OterDataPart = ({dataKeyItems, setDataKeyItems}) => {
  const [keyFields, setKeyFields] = useState([])

  const addNewFild = () => {
    const newFields = [...dataKeyItems, '']
    setDataKeyItems(newFields)
  }

  const handleChange = (e, index) => {
    const newFields = dataKeyItems.map((item, i) => {
      if (i === index) {
        return e.target.value
      }

      return item
    })
    setDataKeyItems(newFields)
  }

  return <div className='section'>
    <div className='section-name'>
      <div>OtherDataItems (0 to n OtherData objects)</div>
      <div className='add-button' onClick={addNewFild}>
        <div className='plus-icon'>+</div>
        <div>Add data_key</div>
      </div>
    </div>
    {
      dataKeyItems.length > 0 ?
      <div className='data-key-table'>
        <div className='table-header'>
          <div className='table-cell name'>Field Name</div>
          <div className='table-cell data-name'>Field Value</div>
        </div>
        {
          dataKeyItems.map((f, index) => {
            return <div className='table-row' key={'key-data-' + index}>
              <div className='table-cell name'>data_key</div>
              <div className='table-cell data-name'>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={f}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            </div>
          })
        }

      </div> : null
    }

    <div className='section-name-sm'>OtherData Object</div>
    <div className='table'>
      <div className='table-header'>
      <div className='table-cell name'>Field Name</div>
      <div className='table-cell type'>Type</div>
      <div className='table-cell size'>Size</div>
      <div className='table-cell required'>Required</div>
      <div className='table-cell comments'>Comments/Notes</div>
      </div>
      <div className='table-row'>
      <div className='table-cell name'>key</div>
      <div className='table-cell type'>Varchar</div>
      <div className='table-cell size'>2000</div>
      <div className='table-cell required'>No</div>
      <div className='table-cell comments'>Bolded value presented to our QA for data key name “Mortgage” for instance</div>
      </div>
      <div className='table-row'>
      <div className='table-cell name'>value</div>
      <div className='table-cell type'>Varchar</div>
      <div className='table-cell size'>Max.</div>
      <div className='table-cell required'>No</div>
      <div className='table-cell comments'>Data value itself “$350k” for instance</div>
      </div>
      <div className='table-row'>
      <div className='table-cell name'>type</div>
      <div className='table-cell type'>Varchar</div>
      <div className='table-cell size'>100</div>
      <div className='table-cell required'>No</div>
      <div className='table-cell comments'>Default to “string”  -- more values in the future.</div>
      </div>
      <div className='table-row'>
      <div className='table-cell name'>school</div>
      <div className='table-cell type'>Varchar</div>
      <div className='table-cell size'>100</div>
      <div className='table-cell required'>No</div>
      <div className='table-cell comments'>Post if this data element is directly related to a specific school.</div>
      </div>
      <div className='table-row'>
      <div className='table-cell name'>label</div>
      <div className='table-cell type'>Varchar</div>
      <div className='table-cell size'>8000</div>
      <div className='table-cell required'>No</div>
      <div className='table-cell comments'>Description if needed for the key</div>
      </div>
    </div>
  </div>
}

export default OterDataPart
