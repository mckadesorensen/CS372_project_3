terraform {
  required_providers {
    aws  = "~> 2.46.0"
    null = "~> 2.1.0"
  }
}

provider "aws" {}

resource "aws_instance" "server" {
  ami = "ami-0915e09cc7ceee3ab"
  instance_type = var.instance_type
  associate_public_ip_address = true

  tags = {
    Name = "${local.prefix}-server"
  }
}
