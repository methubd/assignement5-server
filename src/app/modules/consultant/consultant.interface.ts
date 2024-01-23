type TOtherChamber = {
  chamber: string;
  location: string;
};

type TAvailablefor = {
  availableTypes: 'video' | 'chat' | 'hospital visit';
};

export type TDoctor = {
  name: string;
  patientId: string;
  degrees: string[];
  designation: 'Consultant' | 'Medical Officer';
  department: string;
  speciality: string;
  experience: number;
  about: string;
  consutationFees: number;
  currentWorkStation: string;
  currentDesignation: string;
  otherChamber?: TOtherChamber;
  availableFor: TAvailablefor; // ['video', 'chat', 'hospital visit']
  status: 'active' | 'inactive';
  chamberTime: string;
  chamberDays: string[];
  photoUrl: string;
};
