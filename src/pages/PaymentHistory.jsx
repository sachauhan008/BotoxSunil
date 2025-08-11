
import "../assets/styles/PaymentHistory.css";

function PaymentHistory() {
  return (
    <>
        <main
          className="paymentHistory"
          style={{ flex: 1, display: "flex", flexDirection: "column" }}
          aria-label="Payment History Page"
        >
          <section className="section-1 d-flex justify-content-center align-items-center" aria-label="Payment History Header">
            <div className="container d-flex justify-content-center align-item-center">
              <div className="text-center">
                <div className="slogan-box">
                  <h2 className="fw-semibold text-white mb-4">
                    Payment History
                  </h2>
                  <p>
                    Join our platform and take your skills to the next level.
                  </p>
                </div>
              </div>
              <div className="circle circle-1" aria-hidden="true"></div>
              <div className="circle circle-2" aria-hidden="true"></div>
              <div className="circle circle-3" aria-hidden="true"></div>
            </div>
          </section>

          <section className="container section-2 py-5" aria-label="Events and Transactions">
            <h4 className="fw-semibold">Events & Transactions</h4>
            <div className="line" aria-hidden="true"></div>
            <div className="table-responsive">
              <table className="table align-middle custom-table m-0" aria-label="Payment Events Table">
                <thead>
                  <tr>
                    <th scope="col">Message</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date</th>
                    <th scope="col">Course</th>
                    <th scope="col">Receipt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Enrollment initiated</td>
                    <td>$999.00</td>
                    <td>29 Sep 2024, 02:15 PM</td>
                    <td>Facial Anatomy: Botox Fundamentals</td>
                    <td>
                      <button className="btn btn-1 btn-dark" type="button" aria-label="Download PDF for Facial Anatomy: Botox Fundamentals, 29 Sep 2024">
                        Download PDF
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Enrollment completed</td>
                    <td>$999.00</td>
                    <td>22 Sep 2023, 02:15 PM</td>
                    <td>Botox Injection Technique Practice</td>
                    <td>
                      <button className="btn btn-1 btn-dark" type="button" aria-label="Download PDF for Botox Injection Technique Practice, 22 Sep 2023">
                        Download PDF
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Enrollment initiated</td>
                    <td>$999.00</td>
                    <td>25 Sep 2022, 02:15 PM</td>
                    <td>Botox Injection Technique Practice</td>
                    <td>
                      <button className="btn btn-1 btn-dark" type="button" aria-label="Download PDF for Botox Injection Technique Practice, 25 Sep 2022">
                        Download PDF
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Payment refunded</td>
                    <td>$999.00</td>
                    <td>28 Sep 2021, 02:15 PM</td>
                    <td>Botox Injection Technique Practice</td>
                    <td>
                      <button className="btn btn-1 btn-dark" type="button" aria-label="Download PDF for Botox Injection Technique Practice, 28 Sep 2021">
                        Download PDF
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
    </>
  );
}

export default PaymentHistory;