//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DentistManager.Domain.Entities
{
    using System;
    using System.Collections.Generic;
    
    public partial class Medicine
    {
        public Medicine()
        {
            this.Prescriptions = new HashSet<Prescription>();
            this.Prescriptions1 = new HashSet<Prescription>();
        }
    
        public int MedicineID { get; set; }
        public string Name { get; set; }
        public string SideEffectDecsription { get; set; }
        public string ScaleType { get; set; }
        public string Dose { get; set; }
        public string Concentration { get; set; }
    
        public virtual ICollection<Prescription> Prescriptions { get; set; }
        public virtual ICollection<Prescription> Prescriptions1 { get; set; }
    }
}