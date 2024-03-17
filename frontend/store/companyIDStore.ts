import { create } from "zustand";

interface ICompanyContext {
  companyId: string;
  setCompanyId: (id: string) => void;
}

export const CompanyStore = create<ICompanyContext>()((set) => ({
  companyId: "",
  setCompanyId: (id: string) => set({ companyId: id }),
}));
