# Sync Webhook Sample SAP Sales and Service Cloud V2

*This is the sample code used as a base for a blog post on community.sap.com*

This branch is a simple webhook tester.

You can register an SSCv2 webhook pointing to this app and inspect the incoming payload directly in the application logs.

## How to use this branch

1. Deploy this application to SAP BTP.
2. Expose the webhook endpoint:
   - `POST /hook`
3. Register the endpoint URL as a webhook in SAP Sales and Service Cloud V2.
4. Trigger the webhook event in SSCv2.
5. Check the BTP application logs to see the full payload.

For further details, see the [blog post](https://community.sap.com/t5/crm-and-cx-blogs-by-sap/webhooks-in-sap-sales-and-service-cloud-v2/ba-p/13953064).

## Disclaimer

The repo contains sample code for learning purposes only. It does not contain any best practices or advices. The code is not further maintained or updated. Usage of the code is on your own risk.