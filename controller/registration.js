
const userRegistration = async (reqBody) => {
    let usertype = reqBody['usertype'];
    let name = reqBody['name'];
    let username = reqBody['username'];
    let password = reqBody['password'];
    let email = reqBody['email'];
    let mobile = reqBody['mobile'];
    let allow_ip = reqBody['allow_ip'];
    let account_validity = reqBody['account_validity'];
    let tfa_no = reqBody['tfa_no'];
    let enterprise_name = reqBody['enterprise_name'];
    let designation = reqBody['designation'];
    let account_name = reqBody['account_name'];
    let billing_cycle = reqBody['billing_cycle'];
    let billing_type = reqBody['billing_type'];
    let account_status = reqBody['account_status'];
    let pan_no = reqBody['pan_no'];
    let aadhar_no = reqBody['aadhar_no'];
    let gst_no = reqBody['gst_no'];
    let domain_name = reqBody['domain_name'];
    let company_name = reqBody['company_name'];

    let reqObj = {
        user_type: usertype,
        name: name,
        username: username,
        password: password,
        email: email,
        mobile: mobile,
        allow_ip: allow_ip,
        account_validity: account_validity,
        tfa_no: tfa_no,
        enterprise_name: enterprise_name,
        designation: designation,
        account_name: account_name,
        billing_cycle: billing_cycle,
        billing_type: billing_type,
        account_status: account_status,
        pan_no: pan_no,
        aadhar_no: aadhar_no,
        gst_no: gst_no,
        domain_name: domain_name,
        company_name: company_name,
        gst_file: gst_file,
        pan_file: pan_file,
        aadhar_file: aadhar_file,
        upload_logo: upload_logo,
        upload_favicon: upload_favicon,
        upload_login_logo: upload_login_logo,
    }
}
const accountRegistration = async(reqBody)=> {

}
module.exports = { userRegistration, accountRegistration };