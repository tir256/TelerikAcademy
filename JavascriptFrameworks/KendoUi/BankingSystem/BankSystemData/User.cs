//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BankSystemData
{
    using System;
    using System.Collections.Generic;
    
    public partial class User
    {
        public User()
        {
            this.LogInfoes = new HashSet<LogInfo>();
        }
    
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string AuthKey { get; set; }
        public long AvelableMoney { get; set; }
    
        public virtual ICollection<LogInfo> LogInfoes { get; set; }
    }
}
