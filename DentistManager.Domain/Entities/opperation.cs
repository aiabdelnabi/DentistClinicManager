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
    
    public partial class opperation
    {
        public opperation()
        {
            this.OpperationMaterials = new HashSet<OpperationMaterial>();
            this.Treatments = new HashSet<Treatment>();
        }
    
        public int OpperationID { get; set; }
        public string Name { get; set; }
        public string Color { get; set; }
        public decimal Price { get; set; }
    
        public virtual ICollection<OpperationMaterial> OpperationMaterials { get; set; }
        public virtual ICollection<Treatment> Treatments { get; set; }
    }
}
