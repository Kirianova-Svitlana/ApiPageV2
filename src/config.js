export const sectionsConfig = [
  {
    sectionName: 'Agent Information',
    sectionId: 'headingOne',
    dataTarget:'collapseOne',
    sectionFilds: [
      {
        id: 'AGENT',
        isChecked: false,
        description: 'Your agents name or ID. Used to sort and filter on the dashboard.',
        objectRequest: {
          id: 'AGENT',
          value: 'String content'
        },
        type: 'string',
        size: '255',
      },
      {
        id: 'AGENT_GROUP',
        isChecked: false,
        description: 'Group/Supervisor owning the agent. Can be filtered on dashboard.',
        objectRequest: {
          id: 'AGENT_GROUP',
          value: 'String content'
        },
        type: 'string',
        size: '255',
      },
      {
        id: 'AGENT_NAME',
        isChecked: false,
        description: 'Can be the agents full name instead of their ID. Not used to sort or filter.',
        objectRequest: {
          id: 'AGENT_NAME',
          value: 'String content'
        },
        type: 'string',
        size: '255',
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
        description: `Lead's first name`,
        objectRequest: {
          id: 'First_Name',
          value: 'String content'
        },
        type: 'string',
        size: '150',
      },
      {
        id: 'Last_Name',
        isChecked: false,
        description: `Lead's last name`,
        objectRequest: {
          id: 'Last_Name',
          value: 'String content'
        },
        type: 'string',
        size: '150',
      },
      {
        id: 'Email',
        isChecked: false,
        description: `Email address`,
        objectRequest: {
          id: 'Email',
          value: 'String content'
        },
        type: 'string',
        size: '255',
      },
      {
        id: 'phone',
        isChecked: false,
        description: `Lead's Phone`,
        objectRequest: {
          id: 'phone',
          value: 'String content'
        },
        type: 'string',
        size: '50',
      },
      {
        id: 'address',
        isChecked: false,
        description: `Lead's street address`,
        objectRequest: {
          id: 'address',
          value: 'String content'
        },
        type: 'string',
        size: '200',
      },
      {
        id: 'City',
        isChecked: false,
        description: `City of Lead`,
        objectRequest: {
          id: 'City',
          value: 'String content'
        },
        type: 'string',
        size: '255',
      },
      {
        id: 'State',
        isChecked: false,
        description: `State of Lead`,
        objectRequest: {
          id: 'State',
          value: 'String content'
        },
        type: 'string',
        size: '255',
      },
      {
        id: 'Zip',
        isChecked: false,
        description: `Zip/postal code of lead`,
        objectRequest: {
          id: 'Zip',
          value: 'String content'
        },
        type: 'string',
        size: '20',
      },
      // {
      //   id: 'Program',
      //   isChecked: false,
      //   description: `Program lead was interested in`,
      //   objectRequest: {
      //     id: 'Program',
      //     value: 'String content'
      //   }
      // },
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
        description: 'Time of the call stored as 12/30/1899 + call length - 1899-12-30 00:01:03.000 for example.',
        objectRequest: {
          id: 'CALL_TIME',
          value: 'String content'
        },
        type: 'datetime',
        size: '8',
      },
      {
        id: 'call_date',
        isChecked: false,
        description: 'Date the call/record was created',
        objectRequest: {
          id: 'call_date',
          value: 'String content'
        },
        type: 'datetime',
        size: '8',
      },
      {
        id: 'CALL_TYPE',
        isChecked: false,
        description: 'Type of Call',
        objectRequest: {
          id: 'CALL_TYPE',
          value: 'String content'
        },
        type: 'string',
        size: '255',
      },
      {
        id: 'mustReview',
        isChecked: false,
        description: 'This is so a client can send a call over with it tagged as must review, which will circumvent existing business rules',
        objectRequest: {
          id: 'mustReview',
          value: 'Boolean'
        },
        type: 'boolean',
        size: '1',
      },
      {
        id: 'CAMPAIGN',
        isChecked: false,
        description: 'Is used as a filter on the dashboard.',
        objectRequest: {
          id: 'CAMPAIGN',
          value: 'String content'
        },
        type: 'string',
        size: '255',
      },
      {
        id: 'HANDLE_TIME',
        isChecked: false,
        description: 'Handle time of the call stored as 1/1/1899 + call length -- but is a string, so anything works!',
        objectRequest: {
          id: 'HANDLE_TIME',
          value: 'String content'
        },
        type: 'string',
        size: '100',
      },
      {
        id: 'HOLD_TIME',
        isChecked: false,
        description: 'Hold time of call',
        objectRequest: {
          id: 'HOLD_TIME',
          value: 'String content'
        },
        type: 'string',
        size: '100',
      },
      {
        id: 'TALK_TIME',
        isChecked: false,
        description: 'Talk time of the call stored as 1/1/1899 + call length -- but is a string, so anything works!',
        objectRequest: {
          id: 'TALK_TIME',
          value: 'String content'
        },
        type: 'string',
        size: '100',
      },
      {
        id: 'TIMESTAMP',
        isChecked: false,
        description: 'Full date and time the call was made display only.',
        objectRequest: {
          id: 'TIMESTAMP',
          value: 'String content'
        },
        type: 'string',
        size: '255',
      },
      {
        id: 'LIST_NAME',
        isChecked: false,
        description: 'List from which the call was originated',
        objectRequest: {
          id: 'LIST_NAME',
          value: 'String content'
        },
        type: 'string',
        size: '255',
      },
      {
        id: 'DISPOSITION',
        isChecked: false,
        description: 'Result of the call.',
        objectRequest: {
          id: 'DISPOSITION',
          value: 'String content'
        },
        type: 'string',
        size: '8000',
      },
      {
        id: 'Datacapture_status',
        isChecked: false,
        description: 'Lead ID status',
        objectRequest: {
          id: 'Datacapture_Status',
          value: 'String content'
        },
        type: 'string',
        size: '255',
      },
      {
        id: 'profile_id',
        isChecked: false,
        description: 'Leads internal profile ID',
        objectRequest: {
          id: 'profile_id',
          value: 'String content'
        },
        type: 'string',
        size: '100',
      },
      {
        id: 'leadid',
        isChecked: false,
        description: 'ID number from source system.',
        objectRequest: {
          id: 'leadid',
          value: 'String content'
        },
        type: 'string',
        size: '100',
      },
      {
        id: 'Datacapture',
        isChecked: false,
        description: 'Another lead ID',
        objectRequest: {
          id: 'Datacapture',
          value: 'String content'
        },
        type: 'float',
        size: '8',
      },
      {
        id: 'DatacaptureKey',
        isChecked: false,
        description: 'Another lead ID',
        objectRequest: {
          id: 'Datacapturekey',
          value: 'String content'
        },
        type: 'float',
        size: '8',
      },
      // {
      //   id: 'data_key',
      //   isChecked: false,
      //   description: 'Another lead ID',
      //   objectRequest: {
      //     id: 'data_key',
      //     value: 'String content'
      //   }
      // },
      {
        id: 'Status',
        isChecked: false,
        description: 'Lead Status',
        objectRequest: {
          id: 'Status',
          value: 'String content'
        },
        type: 'string',
        size: '255',
      },
      {
        id: 'sort_order',
        isChecked: false,
        description: 'Insert lower numbers to have these reviewed earlier',
        objectRequest: {
          id: 'sort_order',
          value: 'String content'
        },
        type: 'int',
        size: '4',
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
        description: 'Reference to the audio file -- ftp/sftp/http/https/etc. are all acceptable',
        objectRequest: {
          id: 'audio_link',
          value: 'http://www.google.com/1.wav'
        },
        type: 'string',
        size: '8000',
      },
      {
        id: 'audios',
        isChecked: false,
        description: 'Add as many audio files as needed one object',
        objectRequest: {
          id: 'audios',
          value:  [
            {
              id:'audio_file',
              value: 'String content'
            },
            {
              id:'file_date',
              value: 'MM/DD/YYYY'
            },
            {
              id:'order',
              value: '1'
            }
          ]
        },
        type: '',
        size: null,
      },
    ]
  },
  {
    sectionName: 'Other Data Items',
    sectionId:'headingFive',
    dataTarget:'collapseFive',
    sectionFilds: [
      {
        id: 'OtherDataItems',
        isChecked: false,
        description: 'Add as many other data items one object see below',
        type: '',
        size: null,
        objectRequest: {
          id: 'OtherDataItems',
          value: [
            {
              id:'key',
              value: 'String content'
            },
            {
              id:'label',
              value: 'String content'
            },
            {
              id:'school',
              value: 'String content'
            },
            {
              id:'type',
              value: 'String content'
            },
            {
              id:'value',
              value: 'String content'
            },
          ]
        }
      },
    ]
  },
]
