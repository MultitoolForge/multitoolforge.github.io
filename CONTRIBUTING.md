# **Contributor Guidelines**

Welcome to MuLTItool Forge\! We are thrilled you’re here. By contributing, you’re helping universities everywhere "fill the gaps" and build a better digital learning ecosystem.

---

## **1\. Code of Conduct**

By participating in this project, you agree to abide by our [Code of Conduct](?tab=t.giy9no3jldtv). We are committed to providing a welcoming, inclusive, and harassment-free experience for everyone.

## **2\. How Can I Contribute?**

### **Contributing a Tool**

If you have a locally developed LTI tool that you would like to contribute to the MuLTItool Forge community, please follow the guidelines below. 

NOTE: While we recognize the potential for friction between project standards and institutional oversight, we expect that the contribution process will be refined and clarified over time. Specific decisions regarding licensing, style guides, and expectations for upstream or downstream commits will probably require individual discussion and resolution on a per tool basis.

### **MuLTItool Forge Project/Tool Contribution Checklist**

#### 

#### **Project Eligibility & Provenance**

* \[ \] **Originality & Ownership:** The tool is an original project developed (or significantly contributed to) at the contributing institution, rather than an unmaintained/outdated fork (e.g., direct forks should be referred back to the upstream maintainer).  
* \[ \] **Active Maintenance:** The project is actively maintained (or semi-actively maintained) with up-to-date dependencies, continuous integration, and baseline security patches.  
* \[ \] **Institutional Utility & Value:** The repository represents a tool with broader utility outside the home institution and reflects community value.

  #### 

  #### **Licensing & Open Source Compliance**

* \[ \] **Approved Licensing:**  
  * \[ \] The repository includes a standardized open-source license file (LICENSE.md) in the root directory using an [OSI approved Open Source license](https://opensource.org/licenses).  
  * \[ \] Copyright ownership and initial publication year are clearly identified.  
* \[ \] **Intellectual Property Approval:** Institutional authorization/approval has been secured to release or transfer the code under an open-source license.


  #### **Security & Sensitive Data Scrubbing**

  **CRITICAL:** Ensure all sensitive data and secrets are completely removed from both the current source code **and the Git commit history**.  
* \[ \] **API Keys & Tokens:** No active or legacy API keys, client secrets, or tokens exist in code/history.  
* \[ \] **Credentials & Auth:**  
  * \[ \] No usernames, passwords, or database connection strings.  
  * \[ \] No internal LDAP or SSO credentials/connection configs.  
* \[ \] **Internal Infrastructure:** No internal server IP addresses, internal domain endpoints, or protected database addresses.  
* \[ \] **Secret Keys & Configs:** No hardcoded secret keys (e.g., Django secret keys, Flask secret configs, JWT signing secrets). Use environment variables or example templates instead.  
* \[ \] **PII & Institutional Data:**  
  * \[ \] No Personally Identifiable Information (PII).  
  * \[ \] No real LMS User IDs, Course IDs, or real student/faculty test data.  
* \[ \] **Git History Cleanliness:** Verified that historical commits, squashed branches, and PRs are purged of sensitive data (e.g., using tools like git-filter-repo or BFG Repo-Cleaner).

  #### 

  #### **Repository Setup & Administration**

* \[ \] **Account Security:**  
  * \[ \] Two-Factor Authentication (2FA) is enabled for all contributors and maintainers accessing the repository.  
  * \[ \] Service/Bot accounts for CI/CD pipelines are properly secured.  
* \[ \] **Documentation Baseline:**  
  * \[ \] README.md includes setup instructions, prerequisites, local development guides, and configuration options.  
  * \[ \] Configuration samples are provided (e.g., .env.example, config.example.json).  
* \[ \] **Dependency Management:** Dependencies are clearly defined (e.g., package.json, pom.xml, requirements.txt) without known critical vulnerabilities.

### 

### **Reporting Bugs**

Report bugs by opening an issue in Github. Please be sure to:

* **Check for duplicates:** Search existing issues before opening a new one.  
* **Be specific:** Include the specific LTI Tool, your LMS (Canvas, Blackboard, Brightspace, Moodle, Sakai, etc.), LTI version (e.g., LTI 1.3), and exact steps to reproduce the error.

### **Suggesting Enhancements**

We love new ideas\! If you have an enhancement suggestion for a new or existing tool, please open an issue in Github with **Feature** as the issue type and labeled as **enhancement** and describe:

1. The specific problem or limitation.  
2. Your proposed solution.  
3. How it benefits the broader university community.

### **Pull Requests (PRs)**

1. \[Include steps here for desired workflow.\]

---

## **3\. Style & Technical Standards**

To keep the "Forge" hardened and reliable, we follow these technical pillars:

* **Security:** Never commit secrets, API keys, or hardcoded credentials. All tools must prioritize student data privacy (FERPA/GDPR).  
* **Modularity:** Design tools to be as LMS-agnostic as possible.  
* **Documentation:** Every tool requires a **Deployment Guide** for university admins who may not be full-stack developers.

---

## **4\. The Review Process**

Once you submit a PR, the following workflow begins: \[Release Manager \- Please review and edit as needed.\]

1. **Maintainer Review:** A Maintainer will review your code for logic and style.  
2. **Release Manager Review:** The Release Manager will verify the build and documentation.  
3. **Community Feedback:** We may tag the **Community Manager** to ensure the feature meets the needs described in the original proposal.  
4. **Merge:** Once approved, your code is merged\!

---

## **5\. Community & Support**

If you have questions before you start coding:

* **Join our Community Calls:** We meet monthly on the first Monday of each month from 11:00 AM to 12:30 PM Eastern Time using Big Blue Button:   
  * Join by URL:  [https\://apereo.rooms.blindsidenetworks.com/rooms/vrg-s6b-gcm-yke/join](https://apereo.rooms.blindsidenetworks.com/rooms/vrg-s6b-gcm-yke/join)  
  * Join by phone:  1-510-200-0222   pin: 134 863 164   
* **Group email list:** [lti-forge@apereo.org](mailto:lti-forge@apereo.org)  
  * Subscribe by sending an email to: lti-forge+subscribe@apereo.org  
* **Slack:** \#lti-forge channel in [Apereo Slack](https://apereo.slack.com/signup)  
* **Contact the Community Manager:** Reach out to [wilma.hodges@apereo.org](mailto:wilma.hodges@apereo.org) for onboarding help.

