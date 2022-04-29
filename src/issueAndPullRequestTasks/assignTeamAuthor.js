module.exports = () => [
  {
    "taskType": "trigger",
    "capabilityId": "IssueResponder",
    "subCapability": "PullRequestResponder",
    "version": "1.0",
    "config": {
      "conditions": {
        "operator": "and",
        "operands": [
          {
            "name": "isAction",
            "parameters": {
              "action": "opened"
            }
          },
          {
            "operator": "not",
            "operands": [
              {
                "name": "activitySenderHasPermissions",
                "parameters": {
                  "permissions": "read"
                }
              }
            ]
          }
        ]
      },
      "eventType": "pull_request",
      "eventNames": [
        "pull_request"
      ],
      "taskName": "Assign Team PRs to author",
      "actions": [
        {
          "name": "assignToUser",
          "parameters": {
            "user": {
              "type": "prAuthor"
            }
          }
        }
      ]
    },
    "disabled": false
  }
];
