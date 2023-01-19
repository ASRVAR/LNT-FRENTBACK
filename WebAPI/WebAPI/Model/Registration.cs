using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Model
{
    public class Registration
    {
        public int Reg_id { get; set; }
        public string Name { get; set; }
        public string Email_id { get; set; }
        public string Mobile_No { get; set; }
        public string Address { get; set; }
        public string Photo { get; set; }
        public string Password { get; set; }

    }
}
