//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TwitterData
{
    using System;
    using System.Collections.Generic;
    
    public partial class AspNetUserManagement
    {
        public string UserId { get; set; }
        public bool DisableSignIn { get; set; }
        public System.DateTime LastSignInTimeUtc { get; set; }
    
        public virtual AspNetUser AspNetUser { get; set; }
    }
}