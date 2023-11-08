import type { GetMarketplaceParticipationsResponse } from "./data-contracts";
import type { HttpClient, RequestParams } from "../http-client";

export class Sellers<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns a list of marketplaces that the seller submitting the request can sell in and information about the seller's participation in those marketplaces. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.016 | 15 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags sellers
   * @name GetMarketplaceParticipations
   * @request GET:/sellers/v1/marketplaceParticipations
   */
  getMarketplaceParticipations = (params: RequestParams = {}) =>
    this.http.request<
      GetMarketplaceParticipationsResponse,
      GetMarketplaceParticipationsResponse
    >({
      path: `/sellers/v1/marketplaceParticipations`,
      method: "GET",
      code: "get:/sellers/v1/marketplaceParticipations",
      format: "json",
      ...params,
    });
}
