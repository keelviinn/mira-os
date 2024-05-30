export interface Diagnostic {
  name: string;
  code: string;
}

export interface OTC {
  name: string;
  type: string;
  dose: string;
  frequency: string;
}

export interface MiraCareOption {
  careType: string[];
  active: string[];
  description: string;
}

export interface Dx {
  diagnosis: string;
  probability: string;
  ICD10CMCode: string;
}

export interface RxRecommendation {
  name: string;
  type: string;
  dose: string;
  instruction: string;
}

export interface MiraOSsummary {
  triageLevel: string[];
  chiefComplaint: string;
  dx: Dx[];
  reasonsForDx: string;
  conditionCategory: string;
  rxRecommendation: RxRecommendation[];
  rxExplanation: string;
}

export interface VisitIntake {
  request: string;
  title: string;
  value: string;
}

export interface Data {
  summary: string;
  diagnostic: Diagnostic[];
  selfCareTips: string;
  OTC: OTC[];
  miraCareOptions: MiraCareOption[];
  miraOSsummary: MiraOSsummary;
  visitIntake: VisitIntake[];
}