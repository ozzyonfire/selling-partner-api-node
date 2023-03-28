import type { SubmitInvoicesRequest, SubmitInvoicesResponse } from "./data-contracts";
import type { HttpClient, RequestParams } from "../http-client";
import { ContentType } from "../http-client";

export class Vendor<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Submit new invoices to Amazon. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags vendorPayments
   * @name SubmitInvoices
   * @request POST:/vendor/payments/v1/invoices
   */
  submitInvoices = (body: SubmitInvoicesRequest, params: RequestParams = {}) =>
    this.http.request<SubmitInvoicesResponse, SubmitInvoicesResponse>({
      path: `/vendor/payments/v1/invoices`,
      method: "POST",
      code: "post:/vendor/payments/v1/invoices",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}