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
    
    public partial class MaterialTreatment
    {
        public int TeratmentID { get; set; }
        public int MaterialID { get; set; }
        public Nullable<decimal> MaterialCost { get; set; }
        public double Quantity { get; set; }
    
        public virtual Material Material { get; set; }
        public virtual Treatment Treatment { get; set; }
    }
}