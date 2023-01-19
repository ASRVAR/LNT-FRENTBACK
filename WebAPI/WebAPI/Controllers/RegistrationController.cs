using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using WebAPI.Model;
using Microsoft.AspNetCore.Hosting;
using System.IO;


namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _evn; // Images Upload

        public RegistrationController(IConfiguration configuration, IWebHostEnvironment evn)
        {
            _configuration = configuration;
            _evn = evn;
        }
        
        public JsonResult Get()
        {
            string query = @"Select * from TBL_Registration";
            DataTable table = new DataTable();
            string SqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(SqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpPost]
        public JsonResult Post(Registration reg)
        {
            string query = @"Insert into TBL_Registration values
                             (
                                '" + reg.Name + @"','" + reg.Email_id + @"','" + reg.Mobile_No + @"',
                                '" + reg.Address + @"', '" + reg.Photo + @"','" + reg.Password + @"'
                               )";
            DataTable table = new DataTable();
            string SqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(SqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Add Successfully...!!!");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"Delete from TBL_Registration
                                  where Reg_id=" + id + @"";

            DataTable table = new DataTable();
            string SqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(SqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Delete Succeffuly...!!");
        }

        [HttpPut("{id}")]
        public ActionResult Put(Registration reg, int id)
        {
            string query = @"update TBL_Registration set 
                                    Name ='" + reg.Name + @"',
                                    Email_id='" + reg.Email_id + @"',
                                    Mobile_No='" + reg.Mobile_No + @"',
                                    Address='" + reg.Address + @"',
                                    Photo='" + reg.Photo + @"',
                                    Password='" + reg.Password + @"'
                                    where Reg_id='" + reg.Reg_id + @"'
                                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Update Succefully...!!");
        }

        // Iamges Save Code in Photos Folder OR  Kuch Code Startup.cs Page me write karni h..
        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string fileName = postedFile.FileName;
                var physicalPath = _evn.ContentRootPath + "/RegPhotos/" + fileName;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(fileName);
            }
            catch (Exception)
            {
                return new JsonResult("psr.jpg");
            }
        }

        [HttpGet("{Regid}")]
        public JsonResult Get(int Regid)
        {
            string query = @"Select * from TBL_Registration
                                  where Reg_id=" + Regid + @"";

            DataTable table = new DataTable();
            string SqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(SqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
                    }
       
        //[HttpPut("{id}")]
        //public async Task<IActionResult> Put(int id, Registration reg)
        //{
        //    string query = @"update TBL_Registration set 
        //                            Name ='" + reg.Name + @"',
        //                            Email_id='" + reg.Email_id + @"',
        //                            Mobile_No='" + reg.Mobile_No + @"',
        //                            Address='" + reg.Address + @"',
                                  
        //                            Password='" + reg.Password + @"'
        //                            where Reg_id='" + reg.Reg_id + @"'
        //                            ";
        //    DataTable table = new DataTable();
        //    string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
        //    SqlDataReader myReader;
        //    using (SqlConnection myCon = new SqlConnection(sqlDataSource))
        //    {
        //        myCon.Open();
        //        using (SqlCommand myCommand = new SqlCommand(query, myCon))
        //        {
        //            myReader = myCommand.ExecuteReader();
        //            table.Load(myReader);

        //            myReader.Close();
        //            myCon.Close();
        //        }
        //    }
        //    return new JsonResult("Update 23 Succefully...!!");
        //}

    } 
}
