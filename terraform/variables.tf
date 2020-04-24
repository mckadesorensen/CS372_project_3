variable "DEPLOY_NAME" {
  type = string
}

locals {
  prefix = var.DEPLOY_NAME
}

variable "instance_type" {
  default = "t2.nano"
}