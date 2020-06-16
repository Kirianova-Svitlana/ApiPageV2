export const sectionsConfig = [
  {
    sectionName: 'Agent Information',
    sectionId: 'headingOne',
    dataTarget:'collapseOne',
    sectionFilds: [
      {
        id: 'AGENT',
        isChecked: false,
        description: 'Your agents name or ID. Used to sort and filter on the dashboard.'
      },
      {
        id: 'AGENT_GROUP',
        isChecked: false,
        description: 'Group/Supervisor owning the agent. Can be filtered on dashboard.'
      },
      {
        id: 'AGENT_NAME',
        isChecked: false,
        description: 'Can be the agents full name instead of their ID. Not used to sort or filter.'
      },
    ]
  },
  {
    sectionName: 'Lead Information',
    sectionId:'headingTwo',
    dataTarget:'collapseTwo',
    sectionFilds: [
      {
        id: 'First_Name',
        isChecked: false,
        description: `Lead's first name`
      },
      {
        id: 'Last_Name',
        isChecked: false,
        description: `Lead's last name`
      },
      {
        id: 'Email of lead',
        isChecked: false,
        description: `Lead's first name`
      },
      {
        id: 'phone',
        isChecked: false,
        description: `Lead's Phone`
      },
      {
        id: 'address',
        isChecked: false,
        description: `Lead's street address`
      },
      {
        id: 'City',
        isChecked: false,
        description: `City of Lead`
      },
      {
        id: 'State',
        isChecked: false,
        description: `State of Lead`
      },
      {
        id: 'Zip',
        isChecked: false,
        description: `Zip/postal code of lead`
      },
      {
        id: 'Program',
        isChecked: false,
        description: `Program lead was interested in`
      },
    ]
  },
  {
    sectionName: 'Call Information',
    sectionId:'headingThree',
    dataTarget:'collapseThree',
    sectionFilds: [
      {
        id: 'CALL_TIME',
        isChecked: false,
        description: 'Time of the call stored as 12/30/1899 + call length - 1899-12-30 00:01:03.000 for example.'
      },
      {
        id: 'call_date',
        isChecked: false,
        description: 'Date the call/record was created'
      },
      {
        id: 'CALL_TYPE',
        isChecked: false,
        description: 'Type of Call'
      },
      {
        id: 'CAMPAIGN',
        isChecked: false,
        description: 'Is used as a filter on the dashboard.'
      },
      {
        id: 'HANDLE_TIME',
        isChecked: false,
        description: 'Handle time of the call stored as 1/1/1899 + call length -- but is a string, so anything works!'
      },
      {
        id: 'HOLD_TIME',
        isChecked: false,
        description: 'Hold time of call'
      },
      {
        id: 'TALK_TIME',
        isChecked: false,
        description: 'Talk time of the call stored as 1/1/1899 + call length -- but is a string, so anything works!'
      },
      {
        id: 'TIMESTAMP',
        isChecked: false,
        description: 'Full date and time the call was made display only.'
      },
      {
        id: 'LIST_NAME',
        isChecked: false,
        description: 'List from which the call was originated'
      },
      {
        id: 'DISPOSITION',
        isChecked: false,
        description: 'Result of the call.'
      },
      {
        id: 'Data capture_status',
        isChecked: false,
        description: 'Lead ID status'
      },
      {
        id: 'profile_id',
        isChecked: false,
        description: 'Leads internal profile ID'
      },
      {
        id: 'leadid',
        isChecked: false,
        description: 'ID number from source system.'
      },
      {
        id: 'Data capture',
        isChecked: false,
        description: 'Another lead ID'
      },
      {
        id: 'Data capture Key',
        isChecked: false,
        description: 'Another lead ID'
      },
      {
        id: 'Status',
        isChecked: false,
        description: 'Lead Status'
      },
      {
        id: 'sort_order',
        isChecked: false,
        description: 'Insert lower numbers to have these reviewed earlier'
      },
    ]
  },
  {
    sectionName: 'Audios Information',
    sectionId:'headingFour',
    dataTarget:'collapseFour',
    sectionFilds: [
      {
        id: 'audio_link',
        isChecked: false,
        description: 'Reference to the audio file -- ftp/sftp/http/https/etc. are all acceptable'
      },
      {
        id: 'audios',
        isChecked: false,
        description: 'Add as many audio files as needed one object'
      },
    ]
  },
  {
    sectionName: 'Other Data Items',
    sectionId:'headingFive',
    dataTarget:'collapseFive',
    sectionFilds: [
      {
        id: 'Other Data Items',
        isChecked: false,
        description: 'Add as many other data items one object see below'
      },
    ]
  },
]